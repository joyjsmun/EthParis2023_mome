import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { platform, identity, public_key } = req.query;

  if (!platform || !identity || !public_key) {
    res.status(400).json({ message: 'Missing required parameters' });
    return;
  }

  try {
    const response = await axios.get(`https://proof-service.nextnext.id/v1/proof/exists?platform=${encodeURIComponent(platform)}&identity=${encodeURIComponent(identity)}&public_key=${encodeURIComponent(public_key)}`);

    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res.status(response.status).json({ message: 'Error from proof server' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}