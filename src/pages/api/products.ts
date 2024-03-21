import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  // Find the absolute path of the "json" directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  // Read the "data.json" file
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  // Return the content of the data file in JSON format
  res.status(200).json(JSON.parse(fileContents));
}
