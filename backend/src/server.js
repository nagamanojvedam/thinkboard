import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./config/db.js";
import notesRouter from "./routes/notesRoutes.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5174" }));
app.use(express.json());

app.use("/api/v1/notes", notesRouter);

app.get("/test", (req, res) => {
  return res.status(200).json({
    message: "A think board test",
  });
});

const startServer = () =>
  app.listen(process.env.PORT, () => {
    console.log(`server running on port no ${process.env.PORT}`);
  });

connectDB(startServer);
