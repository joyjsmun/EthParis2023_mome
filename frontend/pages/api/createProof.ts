import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const { action, platform, identity, proof_location, public_key, extra, uuid, created_at } = req.body;

    // Validate the incoming data
    if (!action || !platform || !identity || !public_key || !uuid || !created_at) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }

    // Send a POST request to the Next.id API to create a proof modification
    const response = await axios.post('https://proof-service.nextnext.id/v1/proof', {
      action,
      platform,
      identity,
      proof_location,
      public_key,
      extra,
      uuid,
      created_at,
    });

    // Respond with the data from the Next.id API
    res.status(201).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
}