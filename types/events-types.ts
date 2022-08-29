import { OrganizerId, Organizer } from "./organizers-types";
import { TalkProposalId } from "./talk-types";

export enum EventType {
  Presencial = "Presencial",
  Virtual = "Virtual",
  Hibrido = "Híbrido",
}

export enum EventStatus {
  Borrador = "Borrador",
  EnCurso = "En curso",
  Finalizado = "Finalizado",
}

export interface Event {
  id: string;
  name: string;
  type: EventType;
  description: string;
  talks: TalkProposalId[];
  startingDate: Date;
  endDate: Date;
  bannerUrl: string;
  location: string;
  organizers: OrganizerId[] | Organizer[];
  status: EventStatus;
  proposalsStartingDate: Date;
  proposalsEndDate: Date;
  timezone: string;
}
