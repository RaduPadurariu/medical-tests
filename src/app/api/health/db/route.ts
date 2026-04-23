import { connectToDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    return NextResponse.json({ ok: true, db: "connected" });
  } catch {
    return NextResponse.json({ ok: false, db: "error" }, { status: 500 });
  }
}
