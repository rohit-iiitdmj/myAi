import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';  
import connectDB from './config/database.js';
  // Corrected import statement

import postRoutes from './Routes/postRoutes.js';
import AiRoutes from './Routes/aiRoutes.js';
dotenv.config();  // Ensure dotenv is called correctly

connectDB();
 // Corrected the function call to directly invoke connectDB

const app = express();
app.use(cors()); 
app.use(express.json({ limit: '50mb' }));



app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', AiRoutes);


// app.get('/', async (req, res) => {
//     res.send("Hello from DELL-E-rohit");  // Fixed typo: 'hollo' -> 'Hello'
// });

const startServer = async () => {
  try {
    // connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
