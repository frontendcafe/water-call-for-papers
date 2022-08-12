import { collection, doc, getDoc } from "firebase/firestore";
import { db, firebaseCollections } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { OrganizerId } from "../types/organizers-types";
import { TalkProposalId } from "../types/talk-types";

export const getEvent = async (id: string) => {
  // TODO: Can we make these Refs exportables? so we can use them in other files?
  const eventsRef = collection(db, firebaseCollections.events);
  const organizersRef = collection(db, firebaseCollections.organizers);
  const talksRef = collection(db, firebaseCollections.talks);

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
