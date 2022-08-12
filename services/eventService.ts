import { collection, getDocs, query, where } from "firebase/firestore";
import { db, firebaseCollections } from "../lib/firebase-config";
import { Event } from "../types/events-types";
import { timestamp } from "../lib/utils";
import { Organizer } from "../types/organizers-types";

export async function getAllEvents(): Promise<Event[]> {
  // get all events
  const data: Event[] = [];
  const querySnathop = await getDocs(
    collection(db, firebaseCollections.events)
  );
  for (let index = 0; index < querySnathop.docs.length; index++) {
    const doc = querySnathop.docs[index];
    const datas = doc.data();
    const results = await getOrganizer(doc.data().organizers);
    data.push({
      id: doc.id,
      name: datas.name,
      type: datas.type,
      description: datas.description,
      talks: datas.talks,
      startingDate: timestamp(datas.startingDate.seconds),
      endDate: timestamp(datas.endDate.seconds),
      bannerUrl: datas.bannerUrl,
      location: datas.location,
      organizers: results,
      status: datas.status,
      proposalsStartingDate: timestamp(datas.proposalsStartingDate.seconds),
      proposalsEndDate: timestamp(datas.proposalsEndDate.seconds),
      timezone: datas.timezone,
    });
  }
  return data;
}

const getOrganizer = async (params: any): Promise<Organizer[]> => {
  // find organizer by id events
  const data: Organizer[] = [];
  await Promise.all(
    params.map(async (element: string) => {
      const docRef = collection(db, firebaseCollections.organizers);
      const results = query(docRef, where("id", "==", element));
      const querySnapshot = await getDocs(results);
      querySnapshot.forEach((result) => {
        data.push({
          id: result.id,
          fullName: result.data().fullName,
          email: result.data().email,
        });
      });
    })
  );
  return data;
};
