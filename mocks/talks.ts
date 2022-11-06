import { DBTalkProposal, ProposalStatus } from "../types/talk-types";

export const talks: DBTalkProposal[] = [
  {
    id: "5000001",
    title: "Talk 1",
    summary: "Este es el summary de la talk 1",
    estimatedDuration: 60,
    status: ProposalStatus.AprobadaSinNotificar,
    attachments: [],
    streamed: true,
    topics: ["4000003"],
    candidates: ["rshawe2@51.la"],
    uniqueCode: "c7af5da6-bfc9-4770-ac98-58c8c1656459",
    eventId: "1000001",
    createdAt: new Date("2022-08-13 17:00"),
  },
  {
    id: "5000002",
    title: "Talk 2",
    summary: "Este es el summary de la talk 2",
    estimatedDuration: 60,
    status: ProposalStatus.EnEsperaSinAbrir,
    attachments: [],
    streamed: true,
    topics: ["4000004"],
    candidates: ["atuny0@sohu.com"],
    uniqueCode: "2e0ecb24-f575-4d5f-ba66-7e8eac4709b6",
    eventId: "1000001",
    createdAt: new Date("2022-08-12 16:00"),
  },
  {
    id: "5000003",
    title: "Talk 3",
    summary: "Este es el summary de la talk 3",
    estimatedDuration: 30,
    status: ProposalStatus.EnEspera,
    attachments: [],
    streamed: false,
    topics: ["4000001"],
    candidates: ["hbingley1@plala.or.jp"],
    uniqueCode: "d1e8eb70-14fe-481f-b11b-346d2c2a877c",
    eventId: "1000002",
    createdAt: new Date("2022-08-12 18:00"),
  },
  {
    id: "5000004",
    title: "Talk 4",
    summary: "Este es el summary de la talk 4",
    estimatedDuration: 60,
    status: ProposalStatus.Aprobada,
    attachments: [],
    streamed: true,
    topics: ["4000002"],
    candidates: ["yraigatt3@nature.com"],
    uniqueCode: "09b99ce4-2e5f-4bd5-bac2-fd6a5d6c9aaf",
    eventId: "1000003",
    createdAt: new Date("2022-08-02 15:00"),
  },
];
