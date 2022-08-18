import { addDoc } from "firebase/firestore";
import { collectionsRef } from "../lib/firebase-config";
import { Candidate } from "../types/candidates-types";

export async function saveCandidate(dataCandidate: Candidate) {
  const docRef = await addDoc(collectionsRef.candidates, dataCandidate);
  return docRef;
}
