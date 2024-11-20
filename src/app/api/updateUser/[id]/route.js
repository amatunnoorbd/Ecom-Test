import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
    const db = await connectDB();
    const usersCollection = db.collection("users");
    const updateDoc = await request.json();
    console.log(params.id)
    try {
        const resp = await usersCollection.updateOne(
            { _id: new ObjectId(params.id) },
            {
                $set: {
                    ...updateDoc
                },
            },
            {
                upsert: true
            }
        );
        return NextResponse.json({ message: "updated the users info", response: resp });
    } catch (error) {
        return NextResponse.json({ message: "Something Went Wrong" });
    }
};
