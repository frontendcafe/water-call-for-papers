import {
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit as limitMax,
  orderBy,
  query,
  QueryConstraint,
  updateDoc,
  where,
} from "firebase/firestore";
import { collectionsRef, db } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { calculateDaysLeft, formatFirebaseDate } from "../lib/utils";
import { EventData } from "../types/events-types";
import { Organizer } from "../types/organizers-types";
import { EventQueryOptions } from "../types/others";
import { addOrganizer, getOrganizer } from "./organizers";

export async function getAllEvents({
  limit,
  order = "asc",
  type = [],
}: Partial<EventQueryOptions>): Promise<EventData[]> {
  // get all events
  const typeArr = type.toString().split(",");
  const queryConstraints: QueryConstraint[] = [];

  if (type.length > 0) {
    queryConstraints.push(where("type", "in", typeArr));
  }
  if (order) {
    queryConstraints.push(orderBy("startingDate", order));
  }
  if (limit && parseInt(limit) > 0) {
    queryConstraints.push(limitMax(parseInt(limit)));
  }

  const q = query(collectionsRef.events, ...queryConstraints);

  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return [];

  return Promise.all(
    querySnapshot.docs.map(async (result) => {
      const data = result.data();
      const organizers = await getOrganizer(data.organizers);

      const event: EventData = {
        id: data.id,
        name: data.name,
        description: data.description,
        talks: data.talks,
        startingDate: formatFirebaseDate(data.startingDate.seconds),
        endDate: formatFirebaseDate(data.endDate.seconds),
        organizers,
        proposalsStartingDate: formatFirebaseDate(
          data.proposalsStartingDate.seconds
        ),
        proposalsEndDate: formatFirebaseDate(data.proposalsEndDate.seconds),
        location: data.location,
        bannerUrl: data.bannerUrl,
        status: data.status,
        timezone: data.timezone,
        type: data.type,
      };

      return event;
    })
  );
}

export const getEvent = async (id: string) => {
  if (!id) {
    throw { code: 422, message: "Se requiere el ID del evento" };
  }
  const [event] = (await getDocById(id, collectionsRef.events)) as EventData[];
  event.daysLeft = calculateDaysLeft(event.startingDate);
  return event;
};

export const deleteEvent = async (id: string) => {
  if (!id) {
    throw { code: 422, message: "Se requiere el ID del evento" };
  }
  // delete one event
  await deleteDoc(doc(db, "events", id));
};

export const updateEvent = async (eventId: string, eventData: {}) => {
  if (!eventId) {
    throw { code: 422, message: "Se requiere el ID del evento" };
  }

  const eventRef = doc(db, "events", eventId);
  await updateDoc(eventRef, { ...eventData }).catch(() => {
    throw { code: 404, message: "El evento no existe!" };
  });
};

export const createEvent = async (event: EventData) => {
  // create new event
  const organizersData = event.organizers.map(async (result) => {
    const { fullName, email } = result as Omit<Organizer, "id">;
    const eventSnap = await getDoc(doc(collectionsRef.organizers, email));
    if (!eventSnap.exists()) {
      // validate if organizer exists and create a new organizer
      await addOrganizer({
        id: email,
        fullName,
        email,
      });
    }

    return { id: email, fullName, email } as Organizer;
  });
  const organizers = await Promise.all(organizersData);
  event.organizers = organizers.map(({ email }) => email);

  //create events
  const docRef = await addDoc(collectionsRef.events, event);
  const EventRef = doc(db, "events", docRef.id);
  await updateDoc(EventRef, {
    id: docRef.id,
  });
  const docSnapEvent = await getDoc(EventRef);
  if (!docSnapEvent.exists()) {
    throw { code: 404, message: "Evento no creado!" };
  }

  return { ...docSnapEvent.data(), organizers };
};
