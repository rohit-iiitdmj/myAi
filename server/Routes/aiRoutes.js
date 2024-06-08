import express from 'express';
import dotenv from 'dotenv';
import Replicate from "replicate";


// Load environment variables from a .env file
dotenv.config();
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});
 console.log(replicate);

// Initialize Replicate with the API token from the environment variables
// const replicate = new Replicate({
//   auth: process.env.REPLICATE_API_TOKEN,
// });

const router = express.Router();

// Define the POST route for image generation
router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    console.log("Running the model...");

    // Run the model with the specified prompt
    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          prompt,
        }
      }
    );
    console.log(output);

    // Send the output as a JSON response
    res.status(200).json({ output });
  } catch (error) {
    console.error("Error running the model:", error);
    res.status(500).json({ error: error.message || 'Something went wrong' });
  }
});

export default router;
