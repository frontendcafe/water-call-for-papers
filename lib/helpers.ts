import { CollectionReference, getDocs, query, where } from "firebase/firestore";
import { collectionsRef } from "./firebase-config";

const datesTimestamps = {
  createdAt: "createdAt",
  startingDate: "startingDate",
  endDate: "endDate",
  proposalsStartingDate: "proposalsStartingDate",
  proposalsEndDate: "proposalsEndDate",
};

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
  const id = entityIds.toString().split(",");

  const q = query(docRef, where("id", "in", id));
  const docsSnap = await getDocs(q);

  if (docsSnap.empty) {
    // TODO: Add error handler
    // throw { code: 404, message: `Un documento relacionado no existe!` };

    // TODO: ID is just for debugging?, delete ID from template string.
    return { error: `El documento con ID: ${id} no existe!` };
  }

  const docsData = docsSnap.docs.map(async (doc) => {
    const docData = doc.data();

    for (const key in docData) {
      if (key === "uniqueCode") delete docData.uniqueCode;

      if (key in datesTimestamps) {
        docData[key] = docData[key].toDate();
      }

      if (key in collectionsRef && docData[key].length > 0) {
        docData[key] = await getDocById(docData[key], collectionsRef[key]);
      }
    }

    return docData;
  });

  return Promise.all(docsData);
}
