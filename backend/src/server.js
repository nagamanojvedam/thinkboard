import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import connectDB from "./config/db.js";
import notesRouter from "./routes/notesRoutes.js";

dotenv.config();
const app = express();
const __dirname = path.resolve();
console.log(__dirname);

if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:5173" }));
}
app.use(express.json());

app.use("/api/v1/notes", notesRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get(/.*?/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = () =>
  app.listen(process.env.PORT, () => {
    console.log(`server running on port no ${process.env.PORT}`);
  });

connectDB(startServer);
