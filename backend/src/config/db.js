import mongoose from "mongoose";

export default function connectDB(startServer) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log("Mongo DB connected to:", conn.connection.name);
      startServer();
    })
    .catch((err) => {
      console.log("Error connecting to Mongo DB", err);
      process.exit(1);
    });
}
