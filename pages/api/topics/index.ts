import type { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { err } from "../../../lib/error-handling";
import { parseTopic } from "../../../lib/parsers";
import { addTopic, getAllTopics } from "../../../services/topic";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { body, method } = req;

    if (method === "POST") {
      const topicData = parseTopic(body);
      const data = await addTopic(topicData);

      const message: string = "Se ha creado el tópico";

      return res.status(201).json({ data, message });
    }

    if (method === "GET") {
      const data = await getAllTopics();
      const message = undefined;

      return res.status(200).json({ data, message });
    }

    res.status(405).json(err[405]);
  }
);
