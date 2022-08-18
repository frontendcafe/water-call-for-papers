import { doc, DocumentData, getDoc, updateDoc } from "firebase/firestore";
import { collectionsRef, db } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { TalkProposal } from "../types/talk-types";

export const getTalksFromEvent = async (eventId: string) => {
  const eventSnap = await getDoc(doc(collectionsRef.events, eventId));

  // TODO: Add error handling
  if (!eventSnap.exists()) return { error: "El evento no existe!" };

  const { talks: talksIds } = eventSnap.data();

  const talks = (await getDocById(
    talksIds,
    collectionsRef.talks
  )) as DocumentData[];

  talks.forEach((talk) => delete talk.uniqueCode);

  return talks;
};

export const updateStatusFromTalks = async (
  params: Pick<TalkProposal, "id" | "status">
) => {
  // update status from talks
  const TalksRef = doc(db, "talks", params.id);
  await updateDoc(TalksRef, {
    status: params.status,
  });
};
