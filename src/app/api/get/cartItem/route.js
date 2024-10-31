import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async () => {
    const db =await connectDB()
    const cartItemCollection = db.collection('cartItem')
    try {
        const cartItem = await cartItemCollection.find().toArray();
        return NextResponse.json({cartItem})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message : "No Data Found", error})
    }
}