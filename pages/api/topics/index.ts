import type { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { err } from "../../../lib/error-handling";
import { addTopic } from "../../../services/topic";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { body, method } = req;

    if (method === "POST") {
      const data = await addTopic(body);

      const message: string = "Se ha creado el tópico";

      return res.status(201).json({ data, message });
    }

    res.status(405).json(err[405]);
  }
);