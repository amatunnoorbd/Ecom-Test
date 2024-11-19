import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

// Make sure you're exporting a default handler function for API requests.
export async function PATCH(req, res) {
  try {
    // Connect to your database
    const db = await connectDB();
    const usersCollection = db.collection("users");

    // Get the data from the request body
    const { userId, name, email } = await req.json();  // Ensure you correctly parse the incoming JSON.

    // Update the user document in the database
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(userId) },
      { $set: { name, email } }
    );

    if (result.modifiedCount === 0) {
      // If no document was updated, send an error response.
      return res.status(404).json({ message: "User not found or no changes made" });
    }

    // Respond with a success message
    return res.status(200).json({ message: "User updated successfully" });

  } catch (error) {
    console.error("Error updating item:", error);
    // Handle errors properly and send an error response
    return res.status(500).json({ error: "Internal server error" });
  }
}
