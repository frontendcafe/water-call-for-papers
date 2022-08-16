import { doc, getDoc } from "firebase/firestore";
import { collectionsRef } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { CandidateId } from "../types/candidates-types";
import { TopicId } from "../types/talk-types";

export const getTalk = async (talkId: string) => {
  const talkSnap = await getDoc(doc(collectionsRef.talks, talkId));

  // TODO: Add error handling
  if (!talkSnap.exists()) return { error: "El evento no existe!" };

  const talk = talkSnap.data();

  const candidatesIds: CandidateId[] = talk.candidates;
  const topicsIds: TopicId[] = talk.topics;

  talk.candidates = await getDocById(candidatesIds, collectionsRef.candidates);
  talk.topics = await getDocById(topicsIds, collectionsRef.topics);

  // TODO: Validate a code (uuid) which will be previously sent by mail.
  // ...

  delete talk.uniqueCode;

  return talk;
};
