import type { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { err } from "../../../lib/error-handling";
import { addTopic, getAllTopics } from "../../../services/topic";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { body, method } = req;

    if (method === "POST") {
      const parsedBody = typeof body === "string" ? JSON.parse(body) : body;
      const data = await addTopic(parsedBody);

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
