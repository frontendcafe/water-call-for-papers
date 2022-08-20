import {
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  OrderByDirection,
  query,
  where,
} from "firebase/firestore";
import { collectionsRef, db } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { formatFirebaseDate } from "../lib/utils";
import { Event } from "../types/events-types";
import { Organizer, OrganizerId } from "../types/organizers-types";
import { TalkProposalId } from "../types/talk-types";

export async function getAllEvents(
  order: OrderByDirection = "asc",
  filter: string[] = [""]
): Promise<Event[]> {
  // get all events
  const sortBy = orderBy("startingDate", order);
  // const max = limit(10);
  // TODO: #81 Agregar query index en Firebase requerido para filtrar por tipo de evento
  const docField = where("type", "in", filter);
  const q = query(collectionsRef.events, docField, sortBy /* max */);
  const querySnapshot = await getDocs(q);
  // return events;
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

const getOrganizer = async (params: OrganizerId[]): Promise<Organizer[]> => {
  // get organizers by id
  const response = await getDocById(params, collectionsRef.organizers);
  return response as Organizer[];
};

export const getEvent = async (id: string) => {
  // get one event
  const eventSnap = await getDoc(doc(collectionsRef.events, id));

  // TODO: Add error handling
  if (!eventSnap.exists()) return { error: "El evento no existe!" };

  const organizersIds: OrganizerId[] = eventSnap.data().organizers;
  const talksIds: TalkProposalId[] = eventSnap.data().talks;
  const event = eventSnap.data();

  event.organizers = await getDocById(organizersIds, collectionsRef.organizers);
  event.talks = await getDocById(talksIds, collectionsRef.talks);

  return event;
};

export const deleteEvent = async ({ id }: Pick<Event, "id">) => {
  // delete one event
  await deleteDoc(doc(db, "events", id));
};
