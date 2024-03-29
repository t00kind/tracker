import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../lib/prisma';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body
  res.status(200)
}