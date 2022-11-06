import { doc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase-config";
import { Candidate, CandidateWithoutID } from "../types/candidates-types";

export async function saveCandidate(dataCandidate: CandidateWithoutID) {
  const candidateDate: Candidate = {
    ...dataCandidate,
    id: dataCandidate.email,
  };

  const docRef = await setDoc(
    doc(db, "candidates", dataCandidate.email),
    candidateDate
  );
  return docRef;
}
