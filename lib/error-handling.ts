import { NextApiRequest, NextApiResponse } from "next";
import { ResponseError } from "../types/others";

export default function errorHandler(
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    return handler(req, res).catch((error: ResponseError) => {
      // Set default message for 500 error if needed.
      const { name, message, code } = error;

      if (process.env.NODE_ENV === "development") {
        // Pass error to Next.js own error handler
        /* eslint-disable no-console */
        console.log("\x1b[31m%s\x1b[0m", "        ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼");
        throw error;
      }

      // Catches errors thrown in API Routes, and returns a custom response or default 500 error.
      return res.status(code || 500).send({ name, message, code } || error);
    });
  };
}

export const err = {
  // Some of the most common errors
  "400": { code: 400, message: "Bad Request" },
  "401": { code: 401, message: "Unauthorized" },
  "403": { code: 403, message: "Forbidden" },
  "404": { code: 404, message: "Not Found" },
  "405": { code: 405, message: "Method Not Allowed" },
  "406": { code: 406, message: "Not Acceptable" },
  //
  "500": { code: 500, message: "Internal Server Error" },
  "501": { code: 501, message: "Not Implemented" },
};
