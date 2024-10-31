import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newItem = await request.json();
  const db = await connectDB();
  const cartItemCollection = db.collection("cartItem");

  try {
    const res = await cartItemCollection.insertOne(newItem);
    return Response.json({ message: "Successfully added to cart" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Something Went Wrong" }, { status: 400 });
  }
};