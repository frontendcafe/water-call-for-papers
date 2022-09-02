// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { err } from "../../lib/error-handling";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    if (method === "GET") {
      const data: object[] = [];
      const message: string = "Mensaje en español";

      throw { message: "Something went intentionally wrong" };

      return res.status(200).json({ data, message });
    }

    res.status(405).json(err[405]);
  }
);
