import {
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit as limitMax,
  orderBy,
  query,
  QueryConstraint,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { collectionsRef, db } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { calculateDaysLeft, formatFirebaseDate } from "../lib/utils";
import { DBEventData, EventData, NewEventData } from "../types/events-types";
import { Organizer } from "../types/organizers-types";
import { EventQueryOptions } from "../types/others";
import { addOrganizer, getOrganizer } from "./organizers";

export async function getAllEvents({
  limit,
  order = "desc",
  type = [],
  status,
}: Partial<EventQueryOptions>): Promise<EventData[]> {
  // get all events
  const typeArr = type.toString().split(",");
  const queryConstraints: QueryConstraint[] = [];

  if (status) {
    queryConstraints.push(where("status", "==", status));
  }
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
        daysLeft: calculateDaysLeft(data.startingDate),
      };

      return event;
    })
  );
}

export const getEvent = async (id: string): Promise<EventData> => {
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

export const createEvent = async (event: NewEventData): Promise<EventData> => {
  // create new event
  const organizersData = event.organizers.map(async (result) => {
    const { fullName, email } = result as Organizer;
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

  const organizers: Organizer[] = await Promise.all(organizersData);

  //create events
  const eventRef = doc(collectionsRef.events);

  const eventDBData: DBEventData = {
    ...event,
    id: eventRef.id,
    organizers: organizers.map(({ email }) => email),
    talks: [],
  };
  await setDoc(eventRef, eventDBData);

  const docSnapEvent = await getDoc(eventRef);
  if (!docSnapEvent.exists()) {
    throw { code: 404, message: "Evento no creado!" };
  }

  return {
    ...eventDBData,
    daysLeft: calculateDaysLeft(event.startingDate),
    organizers: await getOrganizer(eventDBData.organizers),
  };
};
