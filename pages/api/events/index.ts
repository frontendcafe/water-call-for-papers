import { NextApiRequest, NextApiResponse } from "next";
import { getAllEvents } from "../../../services/events";
import { Event } from "../../../types/events-types";
import { ResponseError } from "../../../types/others";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[] | ResponseError | string>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const results = await getAllEvents();
        res.status(200).send(results);
      } catch (error) {
        res.status(400).json({ message: "error method", code: 400 });
      }
      break;
    default:
      res.status(500).send("Method not allowed");
      break;
  }
}
