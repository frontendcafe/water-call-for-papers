import { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { err } from "../../../lib/error-handling";
import { parseTalk } from "../../../lib/parsers";
import { getTalksFromEvent, postTalk } from "../../../services/talks";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { body, method, query } = req;
    const { "event-id": eventId } = req.query;

    if (method === "GET") {
      const data = await getTalksFromEvent(eventId as string, query);
      const message = undefined;

      return res.status(200).json({ data, message });
    }

    if (method === "POST") {
      const talkData = parseTalk(body);
      const data = await postTalk(talkData);
      const message = "Se ha creado la propuesta";

      return res.status(201).json({ data, message });
    }

    res.status(405).json(err[405]);
  }
);
