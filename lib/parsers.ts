import { NewEventData } from "../types/events-types";
import { isArray, isDate, isStatus, isString, isType } from "./utils";

/* eslint @typescript-eslint/no-explicit-any: "off" */
export const parseEvent = (rawEvent: any): NewEventData => {
  const event = typeof rawEvent === "string" ? JSON.parse(rawEvent) : rawEvent;

  return {
    bannerUrl: parseString(event.bannerUrl),
    description: parseString(event.description),
    endDate: parseDate(event.endDate),
    location: parseString(event.location),
    name: parseString(event.name),
    organizers: parseOrganizers(event.organizers),
    proposalsEndDate: parseDate(event.proposalsEndDate),
    proposalsStartingDate: parseDate(event.proposalsStartingDate),
    startingDate: parseDate(event.startingDate),
    status: parseStatus(event.status),
    timezone: parseString(event.timezone),
    topics: parseTopics(event.topics),
    type: parseType(event.type),
  };
};

const parseDate = (param: any): Date => {
  if (!isString(param) || !isDate(param)) {
    throw {
      code: 422,
      message: `Missing or '${param}' is not a valid date string`,
    };
  }

  return new Date(param);
};
const parseString = (params: string): string => {
  if (!isString(params)) {
    throw {
      code: 422,
      message: `Incorrect value of type: ${typeof params}`,
    };
  }

  return params;
};
const parseStatus = (param: any) => {
  if (!isString(param) || !isStatus(param)) {
    throw {
      code: 422,
      message: `Property 'status' is missing or the value '${param}' is not valid`,
    };
  }
  return param;
};
const parseTopics = (param: any) => {
  if (!isArray(param)) {
    throw {
      code: 422,
      message: `Property 'organizers' is missing or the value of type: '${typeof param}' is not valid`,
    };
  }

  return param;
};
const parseType = (param: any) => {
  if (!isString(param) || !isType(param)) {
    throw {
      code: 422,
      message: `Property 'type' is missing or the value '${param}' is not valid`,
    };
  }

  return param;
};
const parseOrganizers = (param: any) => {
  if (!isArray(param)) {
    throw {
      code: 422,
      message: `Property 'organizers' is missing or the value of type: '${typeof param}' is not valid`,
    };
  }

  return param;
};
