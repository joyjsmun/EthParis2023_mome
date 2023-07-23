import { NextApiRequest, NextApiResponse } from 'next';
import { GraphQLClient, request, gql } from 'graphql-request';

const endpoint = 'https://api.airstack.xyz/gql';

// Get the token from the environment variables
const authToken = process.env.AIRSTACK_API_KEY;

// Check if the token is defined
if (!authToken) {
  throw new Error('Authorization token is undefined');
}

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `${authToken}`,
  },
});


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
      const data = await graphQLClient.request(UNIVERSAL_RESOLVER, { address });
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while fetching data.' });
    }
  }