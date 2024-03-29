import { doc, getDocs, setDoc } from "firebase/firestore";
import { collectionsRef, db } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";
import { Organizer, OrganizerId } from "../types/organizers-types";

export async function getAllOrganizer(): Promise<Organizer[]> {
  // get all events
  const data: Organizer[] = [];
  const querySnapshot = await getDocs(collectionsRef.organizers);
  if (querySnapshot.empty) return [];

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

export const getOrganizer = async (id: OrganizerId[]): Promise<Organizer[]> => {
  if (!id) {
    throw { code: 422, message: "Se requiere el ID del organizador" };
  }
  // get organizers by id
  const response = await getDocById(id, collectionsRef.organizers);
  return response as Organizer[];
};
