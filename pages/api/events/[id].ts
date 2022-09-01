import { DocumentData } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { err } from "../../../lib/error-handling";
import { deleteEvent, getEvent, updateEvent } from "../../../services/events";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { body, method } = req;
    const { id = "" }: { id?: string } = req.query;

    if (method === "GET") {
      const data: object[] | DocumentData = await getEvent(id);
      const message = undefined;

      return res.status(200).json({ data, message });
    }

    if (method === "PUT") {
      const data = await updateEvent(id, body);
      const message = "Se ha actualizado el evento";

      return res.status(200).json({ data, message });
    }

    if (method === "DELETE") {
      const data = await deleteEvent(id);
      const message = "Se ha eliminado el evento";

      return res.status(200).json({ data, message });
    }

    res.status(405).json(err[405]);
  }
);
