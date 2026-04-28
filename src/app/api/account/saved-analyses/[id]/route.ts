import { authOptions } from "@/lib/auth";
import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email?.toLowerCase();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
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

    const trimmedName = body.name?.trim();
    if (!trimmedName) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    await connectToDB();
    const existingUser = await User.findOne(
      { email },
      { savedAnalyses: 1 },
    ).lean<{ savedAnalyses?: Array<{ _id: string; name: string }> } | null>();

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const normalizedName = trimmedName.toLocaleLowerCase();
    const hasDuplicate = (existingUser.savedAnalyses ?? []).some(
      (analysis) =>
        analysis._id.toString() !== id &&
        analysis.name.trim().toLocaleLowerCase() === normalizedName,
    );

    if (hasDuplicate) {
      return NextResponse.json(
        { error: "Analysis already exists" },
        { status: 409 },
      );
    }

    const updateResult = await User.updateOne(
      { email, "savedAnalyses._id": id },
      { $set: { "savedAnalyses.$.name": trimmedName } },
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json(
        { error: "Analysis not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update test" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email?.toLowerCase();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await connectToDB();
    const updateResult = await User.updateOne(
      { email },
      { $pull: { savedAnalyses: { _id: id } } },
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (updateResult.modifiedCount === 0) {
      return NextResponse.json(
        { error: "Analysis not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete test" },
      { status: 500 },
    );
  }
}
