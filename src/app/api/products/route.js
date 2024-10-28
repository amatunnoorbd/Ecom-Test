import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("_id");      // Fetch _id from query
    const categories = searchParams.get("categories"); // Fetch categories from query

    const db = await connectDB();
    const ProductsCollection = db.collection('products');

    try {
        let query = {};

        // Add filters based on query parameters
        if (id) query._id = new ObjectId(id);  // Filter by _id
        if (categories) query.categories = categories; // Filter by categories

        // Fetch products based on the query
        const products = await ProductsCollection.find(query).toArray();

        if (products.length === 0) {
            return NextResponse.json({ message: "No products found" }, { status: 404 });
        }

        return NextResponse.json({ products });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "No Data Found", error }, { status: 500 });
    }
};
