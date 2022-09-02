import { addDoc, getDocs, query, where } from "firebase/firestore";
import { collectionsRef } from "../lib/firebase-config";
import { Topic } from "../types/talk-types";

export const addTopic = (topics: Pick<Topic, "description">[]) => {
  // Topic needs to be an array.
  if (!Array.isArray(topics)) {
    throw { code: 422, message: `Topics needs to be an array.` };
  }

  // Check if topic arr isn't empty
  if (topics.length <= 0) {
    throw { code: 422, message: "Es requerido al menos un tópico." };
  }

  const topicsId = topics.map(async ({ description }) => {
    // Check if there is a description.
    if (!description) {
      throw { code: 422, message: "There is no description" };
    }

    // Check if description isn't an empty string.
    if (!description.trim()) {
      throw { code: 422, message: "An empty string isn't valid." };
    }

    const constrain = where("description", "==", description);
    const q = query(collectionsRef.topics, constrain);

    const topicsSnap = await getDocs(q);

    if (topicsSnap.empty) {
      const topicRef = await addDoc(collectionsRef.topics, { description });

      return { id: topicRef.id, description };
    }

    const [topicData] = topicsSnap.docs.map((topic) => {
      const data = topic.data();
      data.id = topic.id;
      return data;
    });

    return topicData;
  });

  return Promise.all(topicsId);
};

export const getAllTopics = async (): Promise<Topic[]> => {
  const topicsSnap = await getDocs(collectionsRef.topics);
  if (topicsSnap.empty) return [];

  return topicsSnap.docs.map((topic) => topic.data()) as Topic[];
};
