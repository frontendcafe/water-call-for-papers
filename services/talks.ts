import {
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  QueryConstraint,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { collectionsRef, db } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { Candidate, CandidateId } from "../types/candidates-types";
import { EventId } from "../types/events-types";
import { FilterOptions } from "../types/others";
import {
  DBTalkProposal,
  NewTalkProposal,
  ProposalStatus,
  TalkProposal,
  TalkProposalId,
  TopicId,
} from "../types/talk-types";
import { saveCandidate } from "./candidate";
import { addTopic } from "./topic";

export const getTalksFromEvent = async (
  eventId: EventId,
  { duration, order = "asc", status, streamed, topics = [] }: FilterOptions
): Promise<TalkProposal[]> => {
  if (!eventId) {
    throw { code: 422, message: "Se requiere el ID del evento" };
  }
  const topicsArr = topics.toString().split(",");
  const queryConstraints: QueryConstraint[] = [];

  queryConstraints.push(where("eventId", "==", eventId));

  if (duration) {
    queryConstraints.push(where("estimatedDuration", "==", parseInt(duration)));
  }
  if (order) {
    queryConstraints.push(orderBy("createdAt", order));
  }
  if (status) {
    queryConstraints.push(where("status", "==", status));
  }
  if (streamed) {
    queryConstraints.push(where("streamed", "==", streamed === "true"));
  }
  if (topics.length > 0) {
    queryConstraints.push(where("topics", "array-contains-any", topicsArr));
  }

  const q = query(collectionsRef.talks, ...queryConstraints);
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) return [];

  const talks = querySnapshot.docs.map(async (talkDoc) => {
    const talk = talkDoc.data();
    const candidates = talk.candidates;
    const topics = talk.topics;

    talk.candidates = await getDocById(candidates, collectionsRef.candidates);
    talk.topics = await getDocById(topics, collectionsRef.topics);
    talk.createdAt = talk.createdAt.toDate();

    delete talk.uniqueCode;

    return talk as TalkProposal;
  });

  return Promise.all(talks);
};

export const updateStatusFromTalks = async (
  talkId: TalkProposalId,
  { status }: Pick<TalkProposal, "status">
) => {
  // update status from talks
  if (!status) {
    throw { code: 422, message: "Se requiere el estado de la propuesta" };
  }
  const TalksRef = doc(db, "talks", talkId);
  await updateDoc(TalksRef, { status }).catch(() => {
    throw { code: 404, message: `El evento no existe!` };
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
  eventId,
}: NewTalkProposal): Promise<TalkProposal> => {
  const topicsData = await addTopic(topics);

  const topicsIds = topicsData.map((topic) => {
    return topic.id as TopicId;
  });

  const candidatesIds: CandidateId[] = [];
  const candidatesData: Candidate[] = [];

  for (const candidate of candidates) {
    await saveCandidate(candidate);

    candidatesIds.push(candidate.email);
    candidatesData.push({ ...candidate, id: candidate.email });
  }

  const talkRef = doc(collectionsRef.talks);
  const talkData: DBTalkProposal = {
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
    eventId,
    createdAt: new Date(),
  };

  await setDoc(talkRef, talkData);

  delete talkData.uniqueCode;

  return { ...talkData, topics: topicsData, candidates: candidatesData };
};

export const getTalk = async (
  talkId: TalkProposalId
): Promise<TalkProposal> => {
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
  talk.createdAt = talk.createdAt.toDate();

  // TODO: Validate a code (uuid) which will be previously sent by mail.
  // ...

  delete talk.uniqueCode;

  return talk as TalkProposal;
};
