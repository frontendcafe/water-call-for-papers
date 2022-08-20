// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import errorHandler from "../../lib/error-handling";
import { getAllEvents } from "../../services/events";
import { postTalk } from "../../services/talks";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    // throw new Error("Something went intentionally wrong");
    // throw { message: "Something went intentionally wrong" };
    // Types? { name?: string; message: string; code?: number };

    const { body } = req;

    if (req.method === "GET") {
      const data = await getAllEvents();

      return res.status(200).send(data);
    }

    if (req.method === "POST") {
      const data = await postTalk(body);

      // Should be have a predefined response JSON object?, like:
      const response = { data, message: "Mensaje en español" };

      return res.status(201).send(response);
    }

    res.status(405).send("Method not allowed");
  }
);
