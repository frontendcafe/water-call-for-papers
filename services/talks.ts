import {
  doc,
  DocumentData,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { collectionsRef, db } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { Candidate, CandidateId } from "../types/candidates-types";
import { ProposalStatus, TalkProposal, TopicId } from "../types/talk-types";
import { saveCandidate } from "./candidate";
import { addTopic } from "./topic";

export const getTalksFromEvent = async (eventId: string) => {
  if (!eventId) {
    throw { code: 422, message: "Se requiere el ID del evento" };
  }

  const eventSnap = await getDoc(doc(collectionsRef.events, eventId));
  if (!eventSnap.exists()) {
    throw { code: 404, message: "El evento no existe!" };
  }

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

export const postTalk = async ({
  attachments,
  candidates,
  estimatedDuration,
  streamed,
  summary,
  title,
  topics,
}: Omit<TalkProposal, "topics"> & { topics: { description: string }[] }) => {
  // TODO: Add validations?

  const topicsData = await addTopic(topics);

  const topicsIds = topicsData.map((topic) => {
    return topic.id as TopicId;
  });

  const candidatesIds: CandidateId[] = [];
  const candidatesData: Candidate[] = [];

  for (const candidate of candidates as Candidate[]) {
    await saveCandidate(candidate);

    candidatesIds.push(candidate.id);
    candidatesData.push(candidate);
  }

  const talkRef = doc(collectionsRef.talks);
  const talkData: TalkProposal = {
    attachments,
    candidates: candidatesIds,
    estimatedDuration,
    id: talkRef.id,
    status: ProposalStatus.EnEsperaSinAbrir,
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

export const getTalk = async (talkId: string) => {
  if (!talkId) {
    throw { code: 422, message: "Se requiere el ID de la propuesta de charla" };
  }
  const talkSnap = await getDoc(doc(collectionsRef.talks, talkId));

  // TODO: Not sure if we should throw an error or send a message
  if (!talkSnap.exists()) {
    throw { code: 404, message: "La propuesta de charla no existe!" };
  }

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
