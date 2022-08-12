import { CollectionReference, doc, getDoc } from "firebase/firestore";

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

    return docSnap.data();
  });

  return Promise.all(result);
}
