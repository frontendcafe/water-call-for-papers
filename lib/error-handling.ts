import { NextApiRequest, NextApiResponse } from "next";

interface ErrorObject {
  name?: string;
  message: string;
  code?: number;
}

export default function errorHandler(
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    return handler(req, res).catch((error: ErrorObject) => {
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

export const endpoint = {
  // TODO: Add the missing methods and types.

  GET: async (
    res: NextApiResponse,
    callback: () => void,
    code?: number,
    message?: string
  ) => {
    res.status(code || 200).json({ results: await callback(), message });
  },

  POST: async (
    res: NextApiResponse,
    callback: () => void,
    code?: number,
    message?: string
  ) => {
    res.status(code || 201).json({ results: await callback(), message });
  },
};
