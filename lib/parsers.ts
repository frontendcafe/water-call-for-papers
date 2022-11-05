import {
  eventSchema,
  talkSchema,
  talkStatusSchema,
  topicsSchema,
} from "./schemas";

export const parseEvent = (body: unknown) => eventSchema.parse(body);
export const parseTalk = (body: unknown) => talkSchema.parse(body);
export const parseTalkStatus = (body: unknown) => talkStatusSchema.parse(body);
export const parseTopic = (body: unknown) => topicsSchema.parse(body);
