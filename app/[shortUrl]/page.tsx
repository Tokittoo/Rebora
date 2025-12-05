import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }: { params: { shortUrl: string } }) {
  const shortUrl = params.shortUrl;

  const client = await clientPromise;
  const db = client.db("shortify");
  const collection = db.collection("url");

  const doc = await collection.findOne({ alias: shortUrl });
  if (doc) {
    redirect(doc.longUrl);
  } else {
    // Fallback to public host or root
    redirect(process.env.NEXT_PUBLIC_HOST ?? "/");
  }

  return null;
}
