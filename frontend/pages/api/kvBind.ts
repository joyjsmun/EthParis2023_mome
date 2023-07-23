import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// Extract avatar from the query parameters
const { avatar } = req.query;

// Validate the avatar
if (!avatar || typeof avatar !== 'string') {
res.status(400).json({ error: 'Invalid avatar' });
return;
}

try {
// Send a GET request to the Next.id API
const response = await axios.get(`https://proof-service.nextnext.id/v1/kv?avatar=${encodeURIComponent(avatar)}`);

// Respond with the data from the Next.id API
res.status(200).json(response.data);

} catch (error) {
// Log the error for debugging purposes
console.error(error);

// Respond with an error message
res.status(500).json({ error: 'An error occurred while fetching the KV of the avatar' });
}
}