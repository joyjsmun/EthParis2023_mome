import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { platform, identity } = req.query;

  // Validate the incoming data
  if (!platform || !identity) {
    return res.status(400).json({ message: 'Platform and identity are required.' });
  }

  try {
    // Make a request to the Next.id API
    const response = await axios.get(`https://proof-service.nextnext.id/v1/proof?platform=${platform}&identity=${identity}`);

    // Respond with the data from the Next.id API
    return res.status(200).json(response.data);
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);

    // Respond with an error message
    return res.status(500).json({ message: 'An error occurred while querying the binding.' });
  }
}