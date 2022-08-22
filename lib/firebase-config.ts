import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const storageRef = (fileName: string) => ref(storage, fileName);

interface FirebaseCollectionsRefs {
  [key: string]: CollectionReference<DocumentData>;
}

export const collectionsRef: FirebaseCollectionsRefs = {
  candidates: collection(db, "candidates"),
  events: collection(db, "events"),
  organizers: collection(db, "organizers"),
  talks: collection(db, "talks"),
  topics: collection(db, "topics"),
};
