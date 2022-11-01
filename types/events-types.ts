import { Organizer, OrganizerId, OrganizerWithoutID } from "./organizers-types";
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

export type EventId = string;
export type DaysLeft = number | "Hoy" | "Finalizado";

export interface EventData {
  id: EventId;
  name: string;
  type: EventType;
  description: string;
  talks: TalkProposalId[];
  startingDate: Date;
  endDate: Date;
  bannerUrl: string;
  location: string;
  organizers: Organizer[];
  status: EventStatus;
  proposalsStartingDate: Date;
  proposalsEndDate: Date;
  timezone: string;
  daysLeft: DaysLeft;
}

export interface DBEventData
  extends Omit<EventData, "daysLeft" | "organizers"> {
  organizers: OrganizerId[];
}
export interface NewEventData
  extends Omit<EventData, "id" | "daysLeft" | "organizers" | "talks"> {
  organizers: OrganizerWithoutID[];
}
