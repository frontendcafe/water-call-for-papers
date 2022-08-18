import { addDoc, doc, setDoc } from "firebase/firestore";
import { collectionsRef, db } from "../lib/firebase-config";
import { Candidate } from "../types/candidates-types";

export async function saveCandidate(dataCandidate: Candidate) {
  const docRef = await setDoc(
    doc(db, "candidates", dataCandidate.email),
    dataCandidate
  );
  return docRef;
}
