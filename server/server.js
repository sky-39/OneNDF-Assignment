import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDb from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import loanRoutes from "./routes/loan.routes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRoutes);
app.use('/api/loan', loanRoutes);

app.listen(8000, () => {
  connectToMongoDb();
  console.log(`server is running on port ${PORT}`);
});
