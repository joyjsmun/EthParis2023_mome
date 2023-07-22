import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb", // Set desired value here
    },
  },
};

const jsonDirectory = path.join(process.cwd(), "json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    // Read the existing data from the JSON file
    const jsonData = await fs.readFile(jsonDirectory + "/data.json", "utf8");
    const objectData = JSON.parse(jsonData);

    res.status(200).json(objectData);
  } else if (req.method === "POST") {
    try {
      const jsonData = await fs.readFile(jsonDirectory + "/data.json", "utf8");
      const objectData = JSON.parse(jsonData);

      const {
        id,
        username,
        momentTitle,
        momentDescription,
        momentImg,
        datePosted,
      } = req.body;

      const newData = {
        id,
        username,
        momentTitle,
        momentDescription,
        momentImg,
        datePosted,
      };

      objectData.push(newData);

      const updatedData = JSON.stringify(objectData);

      await fs.writeFile(jsonDirectory + "/data.json", updatedData);

      res.status(200).json({ message: "Data stored successfully" });
    } catch (error) {
      console.error(error);
      // Send an error response
      res.status(500).json({ message: "Error storing data" });
    }
  }
}
