import { Candidate, CandidateId } from "./candidates-types";

export enum ProposalStatus {
  Enviada = "Enviada",
  EnEspera = "En espera",
  Preseleccion = "Preselección",
  Aprobada = "Aprobada",
  Rechazada = "Rechazada",
}

export type TopicId = string;

export interface Topic {
  id: TopicId;
  description: string;
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
  uniqueCode: string;
}
