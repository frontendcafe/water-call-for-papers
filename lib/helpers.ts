import { CollectionReference, doc, getDoc } from "firebase/firestore";
import { collectionsRef } from "./firebase-config";

/**
 * It takes an array of entity ids and a document reference and returns an array of entities
 * @param {string[]} entityIds - An array of entity ids that you want to get from the database.
 * @param {CollectionReference} docRef - Collection reference to the entity you want to get.
 * @returns A promise with an array of entities.
 */
export async function getDocById(
  entityIds: string[],
  docRef: CollectionReference
) {
  const result = entityIds.map(async (id: string) => {
    const docSnap = await getDoc(doc(docRef, id));

    if (!docSnap.exists()) return { error: "El documento no existe!" };

    const docData = docSnap.data();

    for (const key in docData) {
      if (key in collectionsRef && docData[key].length > 0) {
        docData[key] = await getDocById(docData[key], collectionsRef[key]);
      }
    }

    return docData;
  });

  return Promise.all(result);
}
