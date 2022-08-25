import { where, query, getDocs, addDoc } from "firebase/firestore";
import { collectionsRef } from "../lib/firebase-config";
import { Topic } from "../types/talk-types";

export const addTopic = (topics: Pick<Topic, "description">[]) => {
  const topicsId = topics.map(async ({ description }) => {
    const constrain = where("description", "==", description);
    const q = query(collectionsRef.topics, constrain);

    const topicsSnap = await getDocs(q);

    if (topicsSnap.empty) {
      const topicRef = await addDoc(collectionsRef.topics, { description });

      return { id: topicRef.id, description };
    }

    const [topicData] = topicsSnap.docs.map((topic) => {
      const data = topic.data();
      return data;
    });

    return topicData;
  });

  return Promise.all(topicsId);
};
