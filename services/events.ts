import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import {
  db,
  eventsRef,
  firebaseCollections,
  organizersRef,
  talksRef,
} from "../lib/firebase-config";
import { Event } from "../types/events-types";
import { timestamp } from "../lib/utils";
import { Organizer, OrganizerId } from "../types/organizers-types";
import { getDocById } from "../lib/helpers";
import { TalkProposalId } from "../types/talk-types";

export async function getAllEvents(): Promise<Event[]> {
  // get all events
  const data: Event[] = [];
  const querySnathop = await getDocs(eventsRef);

  for (let index = 0; index < querySnathop.docs.length; index++) {
    const doc = querySnathop.docs[index];
    const datas = doc.data();
    const results = await getOrganizer(doc.data().organizers);
    data.push({
      id: doc.id,
      name: datas.name,
      type: datas.type,
      description: datas.description,
      talks: datas.talks,
      startingDate: timestamp(datas.startingDate.seconds),
      endDate: timestamp(datas.endDate.seconds),
      bannerUrl: datas.bannerUrl,
      location: datas.location,
      organizers: results,
      status: datas.status,
      proposalsStartingDate: timestamp(datas.proposalsStartingDate.seconds),
      proposalsEndDate: timestamp(datas.proposalsEndDate.seconds),
      timezone: datas.timezone,
    });
  }
  return data;
}

const getOrganizer = async (params: any): Promise<Organizer[]> => {
  const response = await getDocById(params, organizersRef);
  return response as Organizer[];
};

export const getEvent = async (id: string) => {
  const eventSnap = await getDoc(doc(eventsRef, id));

  // TODO: Add error handling
  if (!eventSnap.exists()) return { error: "El evento no existe!" };

  const organizersIds: OrganizerId[] = eventSnap.data().organizers;
  const talksIds: TalkProposalId[] = eventSnap.data().talks;
  const event = eventSnap.data();

  event.organizers = await getDocById(organizersIds, organizersRef);
  event.talks = await getDocById(talksIds, talksRef);

  return event;
};
