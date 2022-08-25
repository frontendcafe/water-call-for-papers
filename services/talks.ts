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
import { FilterOptions } from "../types/others";
import {
  ProposalStatus,
  TalkProposal,
  TalkProposalId,
  Topic,
  TopicId,
} from "../types/talk-types";
import { saveCandidate } from "./candidate";

export const getTalksFromEvent = async (
  eventId: string,
  { duration, order = "asc", status, streamed, topics = [] }: FilterOptions
) => {
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

    delete talk.uniqueCode;

    return talk;
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
}: TalkProposal) => {
  // TODO: Add validations?

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

export const getTalk = async (talkId: TalkProposalId) => {
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
