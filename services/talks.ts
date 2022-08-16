import { doc, getDoc } from "firebase/firestore";
import { collectionsRef } from "../lib/firebase-config";
import { getDocById } from "../lib/helpers";

export const getTalksFromEvent = async (eventId: string) => {
  const eventSnap = await getDoc(doc(collectionsRef.events, eventId));

  // TODO: Add error handling
  if (!eventSnap.exists()) return { error: "El evento no existe!" };

  const { talks: talksIds } = eventSnap.data();

  return await getDocById(talksIds, collectionsRef.talks);
};
