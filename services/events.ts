import { doc, getDoc } from "firebase/firestore";
import { eventsRef, organizersRef, talksRef } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { OrganizerId } from "../types/organizers-types";
import { TalkProposalId } from "../types/talk-types";

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
