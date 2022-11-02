import { doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { collectionsRef } from "../lib/firebase-config";
import { NewTopic, Topic } from "../types/talk-types";

export const addTopic = (topics: NewTopic[]): Promise<Topic[]> => {
  // Topic needs to be an array.
  if (!Array.isArray(topics)) {
    throw { code: 422, message: `Topics needs to be an array.` };
  }

  // Check if topic arr isn't empty
  if (topics.length <= 0) {
    throw { code: 422, message: "Es requerido al menos un tópico." };
  }

  const topicsId = topics.map(async (topic) => {
    // Check if there is a description.
    if (!topic) {
      throw { code: 422, message: "There is no description" };
    }

    // Check if description isn't an empty string.
    if (!topic.trim()) {
      throw { code: 422, message: "An empty string isn't valid." };
    }

    const constrain = where("description", "==", topic);
    const q = query(collectionsRef.topics, constrain);

    const topicsSnap = await getDocs(q);

    if (topicsSnap.empty) {
      const topicRef = doc(collectionsRef.topics);
      const topicData = { id: topicRef.id, description: topic };
      await setDoc(topicRef, topicData);
      return topicData;
    }

    const [topicData] = topicsSnap.docs.map((topic) => {
      const data = topic.data();
      data.id = topic.id;
      return data;
    }) as Topic[];

    return topicData;
  });

  return Promise.all(topicsId);
};

export const getAllTopics = async (): Promise<Topic[]> => {
  const topicsSnap = await getDocs(collectionsRef.topics);
  if (topicsSnap.empty) return [];

  return topicsSnap.docs.map((topic) => topic.data()) as Topic[];
};
