import { NextApiRequest, NextApiResponse } from "next";
import { Event } from "../../../types/events-types";
import { Error } from "../../../types/others";
import { getAllEvents } from "../../../services/events";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[] | Error | any>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const results = await getAllEvents();
        res.status(200).send(results);
      } catch (error) {
        res.status(400).json({
          message: "disconnect db",
          status: 400,
        });
      }
      break;
    default:
      break;
  }
}
