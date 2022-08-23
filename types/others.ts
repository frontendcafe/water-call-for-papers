import { CollectionReference, OrderByDirection } from "firebase/firestore";

// interfaces error
export interface ResponseError {
  name?: string;
  message: string;
  code?: number;
}

export interface FirebaseCollectionsRefs {
  [key: string]: CollectionReference;
  candidates: CollectionReference;
  events: CollectionReference;
  organizers: CollectionReference;
  talks: CollectionReference;
  topics: CollectionReference;
}

export interface QueryParams {
  order?: OrderByDirection;
  type?: string | string[];
}
