import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

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

export const firebaseCollections = {
  events: "events",
  candidates: "candidates",
  organizers: "organizers",
  topics: "topics",
  talks: "talks",
};

export const candidatesRef = collection(db, firebaseCollections.candidates);
export const eventsRef = collection(db, firebaseCollections.events);
export const organizersRef = collection(db, firebaseCollections.organizers);
export const talksRef = collection(db, firebaseCollections.talks);
export const topicsRef = collection(db, firebaseCollections.topics);
