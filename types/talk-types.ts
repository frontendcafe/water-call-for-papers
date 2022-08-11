import { CandidateId } from "./candidates-types";

export enum ProposalStatus {
  Enviada = "Enviada",
  EnEspera = "En espera",
  Preseleccion = "Preseleccion",
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
  abstract: string;
  estimatedDuration: number;
  status: ProposalStatus;
  attachments: string[];
  streamed: boolean;
  topics: TopicId[];
  proponents: CandidateId[];
}
