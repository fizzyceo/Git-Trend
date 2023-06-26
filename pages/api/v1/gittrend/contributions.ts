import { getGitTrendsContributors, getGitTrendsForks, getGitTrendsStars } from "@/lib/GitCalls";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const schema = z.object({
  fromDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  num_repositories:z.string().max(10000)
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body as Record<string, unknown>;
  const apiKey = req.headers.authorization;

  if (!apiKey) {
    return res.status(401).json({ error: 'Invalid API Key' });
  }

  const apiKeyExists = await db.apiKey.findFirst({
    where: {
      key: apiKey,
      enabled: true,
    },
  });

  if (!apiKeyExists) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const start = new Date()
    const { fromDate,num_repositories } = schema.parse(body);
    const number_repositories =Number(num_repositories)
    const trendsContribitions = await getGitTrendsContributors(fromDate,number_repositories);
    const duration = new Date().getTime() - start.getTime()
   await db.apiRequest.create({
        data:{
            duration:duration,
            method: req.method as string,
            path:req.url as string,
            status:200,
            usedApiKey:apiKeyExists.key,
            apiKeyId:apiKeyExists.id,
        }
    })
    return res.status(200).json({success:true,fromDate:fromDate,num_repositories, trendsContribitions: trendsContribitions });
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error(err); // Log the specific validation errors
      return res.status(400).json({ error: 'Wrong Parameters'+err.message.toString() });
    }
    console.error(err);
    return res.status(405).json({ error: 'Internal server error' });
  }
}
