import { CollectionReference, OrderByDirection } from "firebase/firestore";
import { EventData } from "./events-types";

// interfaces error
export interface ResponseError {
  code: number;
  data?: never;
  message: string;
  name?: string;
}
export interface ResponseData {
  code?: never;
  data: EventData[] | EventData | void;
  message: string | undefined;
  name?: never;
}
export type ResponseObject = ResponseData | ResponseError;

export interface FirebaseCollectionsRefs {
  [key: string]: CollectionReference;
  candidates: CollectionReference;
  events: CollectionReference;
  organizers: CollectionReference;
  talks: CollectionReference;
  topics: CollectionReference;
}

export interface EventQueryOptions {
  limit?: string;
  order?: OrderByDirection;
  status?: string;
  type?: string | string[];
}

export interface FilterOptions {
  duration?: string;
  order?: OrderByDirection;
  status?: string;
  streamed?: string;
  topics?: string[];
}
