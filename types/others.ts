import { CollectionReference } from "firebase/firestore";

// interfaces error
export interface Error {
  message: string;
  status: number;
}

export interface FirebaseCollectionsRefs {
  [key: string]: CollectionReference;
  candidates: CollectionReference;
  events: CollectionReference;
  organizers: CollectionReference;
  talks: CollectionReference;
  topics: CollectionReference;
}
