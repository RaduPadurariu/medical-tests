import { authOptions } from "@/lib/auth";
import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email?.toLowerCase();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    let body: { name?: string };
    try {
      body = (await request.json()) as { name?: string };
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 },
      );
    }

    const { name } = body;
    const trimmedName = name?.trim();

    if (!trimmedName) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    await connectToDB();

    const existingUser = await User.findOne(
      { email },
      { savedAnalyses: 1 },
    ).lean<{ savedAnalyses?: Array<{ name: string }> } | null>();

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const normalizedName = trimmedName.toLocaleLowerCase();
    const hasDuplicate = (existingUser.savedAnalyses ?? []).some(
      (analysis) => analysis.name.trim().toLocaleLowerCase() === normalizedName,
    );

    if (hasDuplicate) {
      return NextResponse.json(
        { error: "Analysis already exists" },
        { status: 409 },
      );
    }

    const updateResult = await User.updateOne(
      { email },
      { $push: { savedAnalyses: { name: trimmedName } } },
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add test" }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email?.toLowerCase();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    await connectToDB();
    const updateResult = await User.updateOne(
      { email },
      { $set: { savedAnalyses: [] } },
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete all tests" },
      { status: 500 },
    );
  }
}
