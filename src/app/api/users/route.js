import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async () => {
    const db =await connectDB()
    const UsersCollection = db.collection('users')
    try {
        const users = await UsersCollection.find().toArray();
        return NextResponse.json({users})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message : "No Data Found", error})
    }
}