import {
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  OrderByDirection,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { collectionsRef, db } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { formatFirebaseDate } from "../lib/utils";
import { Event } from "../types/events-types";
import { OrganizerId, Organizer } from "../types/organizers-types";
import { TalkProposalId } from "../types/talk-types";
import { addOrganizer, getOrganizer } from "./organizers";

export async function getAllEvents(
  order: OrderByDirection = "asc",
  filter: string[] = []
): Promise<Event[]> {
  // get all events
  const docField = where("type", "in", filter);
  const sortBy = orderBy("startingDate", order);

  let q = query(collectionsRef.events, sortBy);
  if (filter.length > 0) {
    q = query(collectionsRef.events, docField, sortBy);
  }

  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return [];

  return Promise.all(
    querySnapshot.docs.map(async (result) => {
      const data = result.data();
      const organizers = await getOrganizer(data.organizers);

      const event: Event = {
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
  // get one event
  const eventSnap = await getDoc(doc(collectionsRef.events, id));

  if (!eventSnap.exists()) {
    throw { code: 404, message: "El evento no existe!" };
  }

  const organizersIds: OrganizerId[] = eventSnap.data().organizers;
  const talksIds: TalkProposalId[] = eventSnap.data().talks;
  const event = eventSnap.data();

  event.organizers = await getDocById(organizersIds, collectionsRef.organizers);
  event.talks = await getDocById(talksIds, collectionsRef.talks);

  return event;
};

export const deleteEvent = async ({ id }: Pick<Event, "id">) => {
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

export const createEvent = async (event: Event) => {
  // create new event
  const data: Array<Omit<Organizer, "id">> | String[] = event.organizers;
  data.map(async (result) => {
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
  });
  //create events
  const docRef = await addDoc(collectionsRef.events, event);
  const EventRef = doc(db, "events", docRef.id);
  await updateDoc(EventRef, {
    id: docRef.id,
  });
  return docRef.id;
};
