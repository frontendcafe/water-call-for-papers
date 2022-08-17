import {
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { collectionsRef } from "../lib/firebase-config";
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
  status,
  streamed,
  summary,
  title,
  topics,
  uniqueCode,
}: TalkProposal) => {
  // TODO: Add error handling, should be our next priority.
  // TODO: These two loops probably can be extracted to a function to reuse.

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

  // [ ] Si el candidato no existe deberá ser agregado a la db Candidates.
  //? Is the candidate just one or there can be many?
  const candidatesIds: CandidateId[] = [];
  const candidatesData: Candidate[] = [];

  for (const { email, firstName, lastName } of candidates as Candidate[]) {
    const constrain = where("email", "==", email);
    const q = query(collectionsRef.candidates, constrain);

    const candidatesSnap = await getDocs(q);

    if (candidatesSnap.empty) {
      const candidateRef = doc(collectionsRef.candidates);

      const newCandidate: Candidate = {
        email,
        firstName,
        id: candidateRef.id,
        lastName,
      };

      await setDoc(candidateRef, newCandidate);

      candidatesIds.push(candidateRef.id);
      candidatesData.push(newCandidate);

      continue;
    }

    candidatesSnap.forEach((candidate) => {
      const candidateRes = candidate.data() as Candidate;

      candidatesIds.push(candidateRes.id);
      candidatesData.push(candidateRes);
    });
  }

  // [ ] Deberá crear un uuid(uniqueCode) auto generado (https://www.npmjs.com/package/uuid)
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
    // TODO: Generate uniqueCode
    uniqueCode,
  };

  // TODO: Figure out why setDoc returns undefined, should be a promise.
  await setDoc(talkRef, talkData);

  return { ...talkData, topics: topicsData, candidates: candidatesData };
};
