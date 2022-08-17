import { NextApiRequest, NextApiResponse } from "next";
import { getAllOrganizer } from "../../../services/organizers";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const results = await getAllOrganizer();
        res.send(results);
      } catch (error) {
        res.status(400).json({
          message: "error method",
          status: 400,
        });
      }
      break;

    default:
      res.status(500).send("Method not allowed");
      break;
  }
}
