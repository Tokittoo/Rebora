import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {

    const body = await request.json() as { longUrl: string; alias: string };
    const client = await clientPromise;
    const db = client.db("shortify");
    const collection = db.collection("url");

    // Check if the short URL is already present or not
    const doc = await collection.findOne({
        alias: body.alias
    })
    if(doc){
        return NextResponse.json({ success: false, error: true, message: 'URL already exists' });
    }

    // Insert the URL data into the collection
    await collection.insertOne({
        longUrl: body.longUrl,
        alias: body.alias
    });

    return NextResponse.json({ success: true, error: false, message: 'URL generated successfully' });
}
