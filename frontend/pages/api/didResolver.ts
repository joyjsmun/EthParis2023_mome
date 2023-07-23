import { NextApiRequest, NextApiResponse } from 'next';
import { request, gql } from 'graphql-request'; // You'll need to install graphql-request if you haven't already

const UNIVERSAL_RESOLVER = gql`
  query MyQuery($address: Identity!) {
    Wallet(input: {identity: $address, blockchain: ethereum}) {
      socials {
        dappName
        profileName
      }
      domains {
        name
      }
      primaryDomain {
        name
      }
      addresses
    }
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { address } = req.body;

  if (!address) {
    res.status(400).json({ message: 'Missing address' });
    return;
  }

  try {
    const data = await request('https://api.airstack.xyz/gql', UNIVERSAL_RESOLVER, { address });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching data.' });
  }
}
