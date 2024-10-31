import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newWishlist = await request.json();
  const db = await connectDB();
  const wishlistCollection = db.collection("wishlist");

  try {
    const res = await wishlistCollection.insertOne(newWishlist);
    return Response.json({ message: "Wishlist added Successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Something Went Wrong" }, { status: 400 });
  }
};