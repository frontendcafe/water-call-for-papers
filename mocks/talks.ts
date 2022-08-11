import { ProposalStatus, TalkProposal } from "../types/talk-types";

export const talks: TalkProposal[] = [
  {
    id: "5000001",
    title: "Talk 1",
    summary: "Este es el summary de la talk 1",
    estimatedDuration: 60,
    status: ProposalStatus.Enviada,
    attachments: [],
    streamed: true,
    topics: ["4000003"],
    proponents: ["3000003"],
  },
  {
    id: "5000002",
    title: "Talk 2",
    summary: "Este es el summary de la talk 2",
    estimatedDuration: 60,
    status: ProposalStatus.Preseleccion,
    attachments: [],
    streamed: true,
    topics: ["4000004"],
    proponents: ["3000001"],
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
    proponents: ["3000002"],
  },
  {
    id: "5000004",
    title: "Talk 4",
    summary: "Este es el summary de la talk 4",
    estimatedDuration: 60,
    status: ProposalStatus.Enviada,
    attachments: [],
    streamed: true,
    topics: ["4000002"],
    proponents: ["3000004"],
  },
];
