import { doc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase-config";
import { Candidate } from "../types/candidates-types";

export async function saveCandidate(dataCandidate: Candidate) {
  dataCandidate.id = dataCandidate.email;
  const docRef = await setDoc(
    doc(db, "candidates", dataCandidate.email),
    dataCandidate
  );
  return docRef;
}
