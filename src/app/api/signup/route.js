import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const newUser = await request.json();
    
    // Ensure mobile and password are provided
    if (!newUser.mobile || !newUser.password) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const db = await connectDB();
    const userCollection = db.collection("users");

    // Check if user exists
    const exist = await userCollection.findOne({ mobile: newUser.mobile });
    if (exist) {
      return NextResponse.json({ message: "User Exists" }, { status: 409 }); // 409 = Conflict
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);

    // Insert new user into the database
    const resp = await userCollection.insertOne({
      mobile: newUser.mobile,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Something Went Wrong", error: error.message },
      { status: 500 }
    );
  }
};
