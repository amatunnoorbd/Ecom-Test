import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async () => {
    const db =await connectDB()
    const wishlistCollection = db.collection('wishlist')
    try {
        const wishlist = await wishlistCollection.find().toArray();
        return NextResponse.json({wishlist})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message : "No Data Found", error})
    }
}