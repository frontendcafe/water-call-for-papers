import type { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { err } from "../../../lib/error-handling";
import { parseTalkStatus } from "../../../lib/parsers";
import { getTalk, updateStatusFromTalks } from "../../../services/talks";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { body, method } = req;
    const { id = "" }: { id?: string } = req.query;

    if (method === "GET") {
      const data = await getTalk(id);
      const message = undefined;

      return res.status(200).json({ data, message });
    }

    if (method === "PUT") {
      const talkStatusData = parseTalkStatus(body);
      const data = await updateStatusFromTalks(id, talkStatusData);
      const message = "Se ha actualizado la propuesta";

      return res.status(200).json({ data, message });
    }

    res.status(405).json(err[405]);
  }
);
