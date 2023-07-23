import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { platform, identity, public_key } = req.query;

  if (!platform || !identity || !public_key) {
    return res.status(400).json({ message: 'Missing required parameters' });
  }

  try {
    const response = await axios.get(`https://proof-service.nextnext.id/v1/proof/exists?platform=${platform}&identity=${identity}&public_key=${public_key}`);

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}