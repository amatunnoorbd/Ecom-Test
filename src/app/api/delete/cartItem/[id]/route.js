import { connectDB } from "@/lib/connectDB";

export const DELETE = async (request, { params }) => {
    const db = await connectDB();
    console.log(typeof(params.id))
    const cartItemCollection = db.collection("cartItem");
    try {
      const resp = await cartItemCollection.deleteOne({
        _id: params.id,
      });
      return Response.json({ message: "deleted successfully", response: resp });
    } catch (error) {
      return Response.json({ message: "Something Went Wrong" });
    }
  };