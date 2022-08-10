import { doc, getDoc, getDocs, query, collection } from "firebase/firestore";
import { db } from "../lib/firebase-config";

export const getEvents = async () => {
  // Traigo todos los eventos
  const events = await getDocs(query(collection(db, "events")));
  // Recorro todos los eventos
  events.forEach(async (d) => {
    const candidatesEvents = d.data().candidates;
    await Promise.all(
      candidatesEvents.map(async (cand: any) => {
        // Busco en la collection proposals por id
        const proposal = await getDoc(doc(db, "proposals", cand.id));
      })
    );
  });

  return;
};
