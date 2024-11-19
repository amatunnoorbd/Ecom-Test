import { MongoClient } from "mongodb";

export async function connectDB() {
  const uri = process.env.MONGODB_URI; // Ensure your env variable is correct
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Database connected successfully");
    return client.db("Ecom-Web");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Database connection failed");
  }
}