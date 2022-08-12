import { collection, getDocs } from "firebase/firestore";
import { db, firebaseCollections } from "../lib/firebase-config";
import { Organizer } from "../types/organizers-types";

export async function getAllOrganizer(): Promise<Organizer[]> {
  // get all events
  const data: Organizer[] = [];
  const querySnathop = await getDocs(
    collection(db, firebaseCollections.organizers)
  );
  querySnathop.forEach((doc) => {
    const { id, ...results } = doc.data();
    data.push({
      id: id,
      fullName: results.fullName,
      email: results.email,
    });
  });

  return data;
}
