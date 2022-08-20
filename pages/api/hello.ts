// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import errorHandler, { endpoint } from "../../lib/error-handling";
import { getAllEvents } from "../../services/events";

export default errorHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    // throw new Error("Something went intentionally wrong");
    // throw { message: "Something went intentionally wrong" };
    // Types? { name?: string; message: string; code?: number };

    if (req.method === "GET") {
      // return endpoint.GET(res, () => ({ data: "Hello" }), 200, "World!");

      return endpoint.GET(res, getAllEvents);
    }

    res.status(405).send("Method not allowed");
  }
);
