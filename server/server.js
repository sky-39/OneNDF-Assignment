import express from "express";
import dotenv from "dotenv";

import connectToMongoDb from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(8000, () => {
  connectToMongoDb();
  console.log(`server is running on port ${PORT}`);
});
