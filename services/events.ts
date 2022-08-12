import { collection, doc, getDoc } from "firebase/firestore";
import { db, firebaseCollections } from "../lib/firebase-config";

export const getEvent = async (id: string) => {
  const docRef = collection(db, firebaseCollections.events);
  const docSnap = await getDoc(doc(docRef, id));

  // TODO: Add error handling
  if (!docSnap.exists()) return { error: "El evento no existe!" };

  return docSnap.data();
};
