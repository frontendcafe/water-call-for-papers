import { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { err } from "../../../lib/error-handling";
import { createEvent, getAllEvents } from "../../../services/events";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { body, method, query } = req;

    if (method === "GET") {
      const data = await getAllEvents(query);
      const message = undefined;

      return res.status(200).json({ data, message });
    }

    if (method === "POST") {
      const data = await createEvent(JSON.parse(body));
      const message = "Se ha creado el evento";

      return res.status(201).json({ data, message });
    }

    res.status(405).json(err[405]);
  }
);
