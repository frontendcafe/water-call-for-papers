import { addDoc, collection } from "firebase/firestore";
import { db, firebaseCollections } from "../lib/firebase-config";
import { Candidate } from "../types/candidates-types";

export async function saveCandidate(dataCandidate: Candidate) {
  const docRef = await addDoc(
    collection(db, firebaseCollections.candidates),
    dataCandidate
  );
  return docRef;
}
