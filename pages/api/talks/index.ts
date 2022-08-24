import { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { err } from "../../../lib/error-handling";
import { postTalk } from "../../../services/talks";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { body, method } = req;

    if (method === "POST") {
      const data = await postTalk(body);
      const message = "Se ha creado la propuesta";

      return res.status(201).json({ data, message });
    }

    res.status(405).json(err[405]);
  }
);
