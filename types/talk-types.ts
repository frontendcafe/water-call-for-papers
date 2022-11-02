import { Candidate, CandidateId } from "./candidates-types";

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
  topics: TopicId[] | Topic[];
  candidates: CandidateId[] | Candidate[];
  uniqueCode?: string;
  eventId: string;
  createdAt: Date;
}
