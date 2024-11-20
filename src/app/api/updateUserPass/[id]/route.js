import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
    const db = await connectDB();
    const usersCollection = db.collection("users");
    const { currentPassword, newPassword } = await request.json();

    try {
        const user = await usersCollection.findOne({ _id: new ObjectId(params.id) });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const isMatch = bcrypt.compareSync(currentPassword, user.password);

        if (!isMatch) {
            return NextResponse.json({ message: "Incorrect current password" }, { status: 400 });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(newPassword, salt);

        const resp = await usersCollection.updateOne(
            { _id: new ObjectId(params.id) },
            { $set: { password: hashedPassword } }
        );

        return NextResponse.json({ message: "Password updated successfully", response: resp });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", error: error.message }, { status: 500 });
    }
};
