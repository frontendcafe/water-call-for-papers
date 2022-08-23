import { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { err } from "../../../lib/error-handling";
import { getAllEvents } from "../../../services/events";
import { QueryParams } from "../../../types/others";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    const { order, type = [] }: QueryParams = req.query;

    if (method === "GET") {
      const filter: string[] = typeof type === "string" ? [type] : type;

      const data = await getAllEvents(order, filter);
      const message = undefined;

      res.status(200).json({ data, message });
    }

    if (method === "POST") {
      // TODO: Implement after issue #21 is closed

      return res.status(501).json(err[501]);
    }

    res.status(405).json(err[405]);
  }
);
