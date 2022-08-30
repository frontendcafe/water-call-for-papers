import { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { err } from "../../../lib/error-handling";
import { createEvent, getAllEvents } from "../../../services/events";
import { QueryParams } from "../../../types/others";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { body, method } = req;
    const { order, type = [] }: QueryParams = req.query;

    if (method === "GET") {
      const filter: string[] = typeof type === "string" ? [type] : type;

      const data = await getAllEvents(order, filter);
      const message = undefined;

      return res.status(200).json({ data, message });
    }

    if (method === "POST") {
      const data = await createEvent(body);
      const message = "Se ha creado el evento";

      return res.status(201).json({ data, message });
    }

    res.status(405).json(err[405]);
  }
);
