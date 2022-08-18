import { addDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { collectionsRef, db } from "../lib/firebase-config";
import { Organizer } from "../types/organizers-types";

export async function getAllOrganizer(): Promise<Organizer[]> {
  // get all events
  const data: Organizer[] = [];
  const querySnapshot = await getDocs(collectionsRef.organizers);
  querySnapshot.forEach((doc) => {
    const { id, ...results } = doc.data();
    data.push({
      id: id,
      fullName: results.fullName,
      email: results.email,
    });
  });

  return data;
}

export async function addOrganizer(dataOrganizer: Organizer) {
  //create Organizer
  const docRef = await setDoc(
    doc(db, "organizers", dataOrganizer.email),
    dataOrganizer
  );
  return docRef;
}
