import { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { err } from "../../../lib/error-handling";
import { parseEvent } from "../../../lib/parsers";
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
      const eventData = parseEvent(body);
      const data = await createEvent(eventData);
      const message = "Se ha creado el evento";

      return res.status(201).json({ data, message });
    }

    res.status(405).json(err[405]);
  }
);
