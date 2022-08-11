import { EventType, Event, EventStatus } from "../types/events-types";

export const events: Event[] = [
  {
    id: "1000001",
    name: "Event 1",
    type: EventType.Presencial,
    description: "Este es un evento de prueba número 1",
    talks: [], // TODO: Falta agregar los mocks de las charlas
    startingDate: new Date("2022-10-12 15:00"),
    endDate: new Date("2022-10-14 19:00"),
    bannerUrl: "https://via.placeholder.com/350x150",
    location: "Buenos Aires, Argentina",
    organizers: ["2000002", "2000003"],
    status: EventStatus.Borrador,
    proposalsStartingDate: new Date("2022-08-12 15:00"),
    proposalsEndDate: new Date("2022-08-30 15:00"),
    timezone: "America/Argentina/Buenos_Aires",
  },
  {
    id: "1000002",
    name: "Event 2",
    type: EventType.Presencial,
    description: "Este es un evento de prueba número 2",
    talks: [], // TODO: Falta agregar los mocks de las charlas
    startingDate: new Date("2022-11-12 15:00"),
    endDate: new Date("2022-11-14 19:00"),
    bannerUrl: "https://via.placeholder.com/350x150",
    location: "Buenos Aires, Argentina",
    organizers: ["2000004"],
    status: EventStatus.Borrador,
    proposalsStartingDate: new Date("2022-08-12 15:00"),
    proposalsEndDate: new Date("2022-09-30 15:00"),
    timezone: "America/Argentina/Buenos_Aires",
  },
  {
    id: "1000003",
    name: "Event 3",
    type: EventType.Presencial,
    description: "Este es un evento de prueba número 3",
    talks: [], // TODO: Falta agregar los mocks de las charlas
    startingDate: new Date("2022-12-12 15:00"),
    endDate: new Date("2022-12-15 19:00"),
    bannerUrl: "https://via.placeholder.com/350x150",
    location: "Buenos Aires, Argentina",
    organizers: ["2000001", "2000005"],
    status: EventStatus.EnCurso,
    proposalsStartingDate: new Date("2022-08-01 15:00"),
    proposalsEndDate: new Date("2022-10-30 15:00"),
    timezone: "America/Argentina/Buenos_Aires",
  },
];
