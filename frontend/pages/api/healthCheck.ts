import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'; // You'll need to install axios if you haven't already

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method === 'GET') {
try {
const response = await axios.get('https://proof-service.nextnext.id/healthz');
res.status(200).json(response.data);
} catch (error) {
console.error(error); // Log the error for debugging purposes
res.status(500).json({ message: 'An error occurred while fetching server info.' });
}
} else {
res.setHeader('Allow', ['GET']);
res.status(405).end(`Method ${req.method} Not Allowed`);
}
}