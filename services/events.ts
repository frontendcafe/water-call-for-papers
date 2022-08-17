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
import { formatFirebaseDate } from "../lib/utils";
import { Organizer, OrganizerId } from "../types/organizers-types";
import { getDocById } from "../lib/helpers";
import { TalkProposalId } from "../types/talk-types";

export async function getAllEvents(): Promise<any[]> {
  // get all events
  const querySnapshot = await getDocs(eventsRef);
  const result = await Promise.all(
    querySnapshot.docs.map(async (result) => {
      const events: Event[] = [];
      const datas = result.data();
      const organizers = await getOrganizer(datas.organizers);
      events.push({
        id: result.id,
        name: datas.name,
        type: datas.type,
        description: datas.description,
        talks: datas.talks,
        startingDate: formatFirebaseDate(datas.startingDate.seconds),
        endDate: formatFirebaseDate(datas.endDate.seconds),
        bannerUrl: datas.bannerUrl,
        location: datas.location,
        organizers,
        status: datas.status,
        proposalsStartingDate: formatFirebaseDate(
          datas.proposalsStartingDate.seconds
        ),
        proposalsEndDate: formatFirebaseDate(datas.proposalsEndDate.seconds),
        timezone: datas.timezone,
      });
      return await events;
    })
  );
  return result;
}

const getOrganizer = async (params: any): Promise<any[]> => {
  // get organizers by id
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
