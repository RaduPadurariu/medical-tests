import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { connectToDB } from "@/lib/mongodb";

// Create a new user
export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const body = await req.json();
    const created = await User.create(body);

    return NextResponse.json({ ok: true, user: created }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "create_failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

// Get a user by email
export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    const email = req.nextUrl.searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "email query param required" },
        { status: 400 },
      );
    }

    const user = await User.findOne({ email }).lean();

    return NextResponse.json({ ok: true, user }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "read_failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await connectToDB();

    const email = req.nextUrl.searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "email query param required" },
        { status: 400 },
      );
    }

    const body = await req.json();

    const updateData: Record<string, unknown> = {};
    if (body.name !== undefined) updateData.name = body.name;
    if (body.headerData !== undefined) updateData.headerData = body.headerData;
    if (body.savedAnalyses !== undefined)
      updateData.savedAnalyses = body.savedAnalyses;
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { ok: false, error: "no fields provided for update" },
        { status: 400 },
      );
    }
    const updatedUser = await User.findOneAndUpdate(
      { email: email.toLowerCase() },
      { $set: updateData },
      { new: true, runValidators: true },
    ).lean();
    if (!updatedUser) {
      return NextResponse.json(
        { ok: false, error: "user not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ ok: true, user: updatedUser }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "update_failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

// Delete a user by email
export async function DELETE(req: NextRequest) {
  try {
    await connectToDB();

    const email = req.nextUrl.searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "email query param required" },
        { status: 400 },
      );
    }

    const deletedUser = await User.findOneAndDelete({
      email: email.toLowerCase(),
    }).lean();
    if (!deletedUser) {
      return NextResponse.json(
        { ok: false, error: "user not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { ok: true, message: "user deleted", user: deletedUser },
      { status: 200 },
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "delete_failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
