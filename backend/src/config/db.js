import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB connected to:", conn.connection.name);
  } catch (err) {
    console.log("Error connecting to Mongo DB", err);
    process.exit(1);
  }
};
