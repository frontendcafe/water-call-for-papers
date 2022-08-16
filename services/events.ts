import {
  doc,
  getDoc,
  getDocs,
  query,
  where,
  Timestamp,
  orderBy,
} from "firebase/firestore";
import { eventsRef, organizersRef, talksRef } from "../lib/firebase-config";
import { Event } from "../types/events-types";
import { timestamp } from "../lib/utils";
import { Organizer, OrganizerId } from "../types/organizers-types";
import { getDocById } from "../lib/helpers";
import { TalkProposalId } from "../types/talk-types";

export async function getAllEvents(): Promise<Event[]> {
  // get all events
  const querySnathop = await getDocs(eventsRef);
  const results = await createObjectEvents(querySnathop);
  return results;
}

const getOrganizer = async (params: any): Promise<Organizer[]> => {
  const response = await getDocById(params, organizersRef);
  return response as Organizer[];
};

export const getEvent = async (id: string) => {
  // get one event
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

export async function filterDate(key: any, date: any, typeFilter: any) {
  // get event for date
  const convert = new Date(date);
  const convertTime = Timestamp.fromDate(convert);
  const q = query(
    eventsRef,
    orderBy(key, typeFilter),
    where(key, ">=", convertTime)
  );
  const querySnapshot = await getDocs(q);
  const results = await createObjectEvents(querySnapshot);
  return results;
}

export async function filterTypEvent(typeEvent: string) {
  // get event for typeEvent
  const q = query(eventsRef, where("type", "==", typeEvent));
  const querySnapshot = await getDocs(q);
  const results = await createObjectEvents(querySnapshot);
  return results;
}

const createObjectEvents = async (querySnathop: any) => {
  // create objects events
  const data: Event[] = [];
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
};
