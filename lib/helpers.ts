import { CollectionReference, doc, getDoc } from "firebase/firestore";
import { collectionsRef } from "./firebase-config";

/**
 * It takes an array of entity ids and a document reference and returns an array of entities
 * @param {string | string[]} entityIds - String or array of strings with entity ids that you want to get from the database.
 * @param {CollectionReference} docRef - Collection reference to the entity you want to get.
 * @returns A promise with an array of entities.
 */
export async function getDocById(
  entityIds: string | string[],
  docRef: CollectionReference
) {
  const recursivelyGetDoc = async (id: string) => {
    const docSnap = await getDoc(doc(docRef, id));

    if (!docSnap.exists()) {
      // TODO: Add error handler
      // throw { code: 404, message: `Un documento relacionado no existe!` };

      // TODO: ID is just for debugging?, delete ID from template string.
      return { error: `El documento con ID: ${id} no existe!` };
    }

    const docData = docSnap.data();

    for (const key in docData) {
      if (key in collectionsRef && docData[key].length > 0) {
        docData[key] = await getDocById(docData[key], collectionsRef[key]);
      }
    }

    return docData;
  };

  if (typeof entityIds === "string") {
    return recursivelyGetDoc(entityIds);
  }

  if (Array.isArray(entityIds)) {
    return Promise.all(entityIds.map(recursivelyGetDoc));
  }
}
