import connectMongoDB from "@/lib/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { name, description, price } = await request.json();
    await connectMongoDB();
    Item.create({name, description, price});
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}