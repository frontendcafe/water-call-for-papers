import { Candidate, CandidateId, CandidateWithoutID } from "./candidates-types";

export enum ProposalStatus {
  EnEsperaSinAbrir = "En revisión sin abrir",
  EnEspera = "En revisión",
  AprobadaSinNotificar = "Aprobada sin notificar",
  Aprobada = "Aprobada",
  Rechazada = "Rechazada",
}

export type TopicId = string;
export type NewTopic = string;
export interface Topic {
  id: TopicId;
  description: NewTopic;
}

export type TalkProposalId = string;

export interface TalkProposal {
  id: TalkProposalId;
  title: string;
  summary: string;
  estimatedDuration: number;
  status: ProposalStatus;
  attachments: string[];
  streamed: boolean;
  topics: Topic[];
  candidates: Candidate[];
  eventId: string;
  createdAt: Date;
}

export interface TalkProposalSensitiveData extends TalkProposal {
  uniqueCode?: string;
}
export interface NewTalkProposal
  extends Omit<
    TalkProposal,
    "id" | "status" | "createdAt" | "status" | "topics" | "candidates"
  > {
  candidates: CandidateWithoutID[];
  topics: NewTopic[];
}
export interface DBTalkProposal
  extends Omit<TalkProposal, "candidates" | "topics"> {
  candidates: CandidateId[];
  topics: TopicId[];
  uniqueCode?: string;
}
