import { connectDB } from "@/lib/connectDB";

export const DELETE = async (request, { params }) => {
    const db = await connectDB();
    console.log(typeof(params.id))
    const wishlistCollection = db.collection("wishlist");
    try {
      const resp = await wishlistCollection.deleteOne({
        _id: params.id,
      });
      return Response.json({ message: "deleted successfully", response: resp });
    } catch (error) {
      return Response.json({ message: "Something Went Wrong" });
    }
  };