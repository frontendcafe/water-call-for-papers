import {
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { collectionsRef, db } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { Candidate, CandidateId } from "../types/candidates-types";
import {
  ProposalStatus,
  TalkProposal,
  Topic,
  TopicId,
} from "../types/talk-types";

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

export const postTalk = async ({
  attachments,
  candidates,
  estimatedDuration,
  id,
  streamed,
  summary,
  title,
  topics,
}: TalkProposal) => {
  // TODO: Add error handling, should be our next priority.
  // TODO: These loops probably can be extracted to a function to reuse.

  const topicsIds: TopicId[] = [];
  const topicsData: Topic[] = [];

  for (const { description } of topics as Topic[]) {
    const constrain = where("description", "==", description);
    const q = query(collectionsRef.topics, constrain);

    const topicsSnap = await getDocs(q);

    if (topicsSnap.empty) {
      const topicRef = doc(collectionsRef.topics);

      const newTopic: Topic = { id: topicRef.id, description };

      await setDoc(topicRef, newTopic);

      topicsIds.push(topicRef.id);
      topicsData.push(newTopic);

      continue;
    }

    topicsSnap.forEach((topic) => {
      const topicRes = topic.data() as Topic;

      topicsIds.push(topicRes.id);
      topicsData.push(topicRes);
    });
  }

  const candidatesIds: CandidateId[] = [];
  const candidatesData: Candidate[] = [];

  for (const candidate of candidates as Candidate[]) {
    const candidateRef = doc(collectionsRef.candidates, candidate.id);
    const getCandidate = await getDoc(candidateRef);

    if (!getCandidate.exists()) {
      const candidateRef = doc(db, "candidates", candidate.id);

      const newCandidate: Candidate = { ...candidate, id: candidateRef.id };

      await setDoc(candidateRef, newCandidate);
    }

    candidatesIds.push(candidate.id);
    candidatesData.push(candidate);
  }

  const talkRef = doc(collectionsRef.talks);
  const talkData: TalkProposal = {
    attachments: [],
    candidates: candidatesIds,
    estimatedDuration,
    id: talkRef.id,
    status: ProposalStatus.Enviada,
    streamed,
    summary,
    title,
    topics: topicsIds,
    uniqueCode: uuidv4(),
  };

  await setDoc(talkRef, talkData);

  delete talkData.uniqueCode;

  return { ...talkData, topics: topicsData, candidates: candidatesData };
};
