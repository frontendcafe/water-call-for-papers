import { OrganizerId } from "./organizers-types";

export enum EventType {
  Presencial = "Presencial",
  Virtual = "Virtual",
  Hibrido = "Hibrido",
}

export enum EventStatus {
  Borrador = "Borrador",
  NoSeTomanMasPropuestas = "No se toman mas propuestas",
  EnCurso = "En curso",
  Finalizado = "Finalizado",
}

export interface Event {
  id: string;
  name: string;
  type: EventType;
  description: string;
  talks: [];
  startingDate: Date;
  endDate: Date;
  bannerUrl: string;
  location: string;
  organizers: OrganizerId[];
  status: EventStatus;
  proposalsStartingDate: Date;
  proposalsEndDate: Date;
  timezone: string;
}
