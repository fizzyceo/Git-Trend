import { db } from "@/lib/db";
import { nanoid } from "nanoid";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { CreateApiData } from "../../../types/api-key";
import { authOptions } from "@/lib/Auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateApiData>
) {
  try {
    const user = await getServerSession(req, res, authOptions).then(
      (res) => res?.user
    );

    if (!user) {
      return res.status(401).json({
        error: "Unauthorized to perform this action.",
        createdApiKey: null,
      });
    }

    const existingApiKey = await db.apiKey.findFirst({
      where: { userId: user.id, enabled: true },
    });

    if (existingApiKey) {
      return res.status(400).json({
        error: "You already have a valid API key.",
        createdApiKey: null,
      });
    }

    const createdApiKey = await db.apiKey.create({
      data: {
        userId: user.id,
        key: nanoid(32),
      },
    });

    return res.status(200).json({ error: null, createdApiKey });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal Server Error", createdApiKey: null });
  }
}
