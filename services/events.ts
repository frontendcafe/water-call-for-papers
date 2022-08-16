import { doc, DocumentData, getDoc } from "firebase/firestore";
import { collectionsRef } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { OrganizerId } from "../types/organizers-types";
import { TalkProposalId } from "../types/talk-types";

export const getEvent = async (id: string) => {
  const eventSnap = await getDoc(doc(collectionsRef.events, id));

  // TODO: Add error handling
  if (!eventSnap.exists()) return { error: "El evento no existe!" };

  let event = eventSnap.data();
  const organizersIds: OrganizerId[] = event.organizers;
  const talksIds: TalkProposalId[] = event.talks;

  event.organizers = await getDocById(organizersIds, collectionsRef.organizers);
  event.talks = await getDocById(talksIds, collectionsRef.talks);
  event = (await getDocById(id, collectionsRef.events)) as DocumentData;

  return event;
};
