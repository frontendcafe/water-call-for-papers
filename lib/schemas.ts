import { z } from "zod";
import { EventStatus, EventType } from "../types/events-types";
import { ProposalStatus } from "../types/talk-types";

const processDateStrings = () => {
  return z.preprocess((arg: unknown) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  }, z.date());
};

const organizerSchema = z.object({
  email: z.string().email(),
  fullName: z.string(),
});

const topicsSchema = z.array(z.string().min(1));

const eventSchema = z.object({
  bannerUrl: z.string().default("/img/placeholder.png"),
  description: z.string(),
  endDate: processDateStrings(),
  location: z.string(),
  name: z.string().min(1),
  organizers: z.array(organizerSchema),
  proposalsEndDate: processDateStrings(),
  proposalsStartingDate: processDateStrings(),
  startingDate: processDateStrings(),
  status: z.nativeEnum(EventStatus),
  talks: z.array(z.string()).default([]),
  timezone: z.string(),
  topics: topicsSchema,
  type: z.nativeEnum(EventType),
});
const updateEvtSchema = eventSchema.partial();

const candidateSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

const talkSchema = z.object({
  attachments: z.array(z.string()),
  candidates: z.array(candidateSchema),
  estimatedDuration: z.number(),
  eventId: z.string(),
  status: z.nativeEnum(ProposalStatus).default(ProposalStatus.EnEsperaSinAbrir),
  streamed: z.boolean(),
  summary: z.string(),
  title: z.string().min(1),
  topics: topicsSchema,
});

const talkStatusSchema = talkSchema.pick({ status: true });

export {
  topicsSchema,
  eventSchema,
  updateEvtSchema,
  talkSchema,
  talkStatusSchema,
};
