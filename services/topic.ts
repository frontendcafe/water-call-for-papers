import { where, query, getDocs, setDoc, doc } from "firebase/firestore";
import { collectionsRef } from "../lib/firebase-config";
import { Topic } from "../types/talk-types";

export const addTopic = (topics: Pick<Topic, "description">[]) => {
  const topicsId = topics.map(async ({ description }) => {
    const constrain = where("description", "==", description);
    const q = query(collectionsRef.topics, constrain);

    const topicsSnap = await getDocs(q);

    if (topicsSnap.empty) {
      const topicRef = doc(collectionsRef.topics);

      const newTopic: Topic = { id: topicRef.id, description };

      await setDoc(topicRef, newTopic);

      return newTopic as Topic;
    }

    return topicsSnap.docs.map((topic) => topic.data() as Topic);
  });

  return Promise.all(topicsId);
};
