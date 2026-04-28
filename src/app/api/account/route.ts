import { authOptions } from "@/lib/auth";
import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";
import { DBUserHeaderDataType } from "@/types/types";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

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
    await User.deleteOne({ email });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not delete account" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email?.toLowerCase();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const { fullName, age, sex, city } = (await request.json()) as {
      fullName?: string;
      age?: string;
      sex?: string;
      city?: string;
    };

    const normalizedSex: DBUserHeaderDataType["sex"] =
      sex === "male" || sex === "female" ? sex : null;

    await connectToDB();
    await User.updateOne(
      { email },
      {
        $set: {
          headerData: {
            fullName: fullName?.trim() ? fullName.trim() : null,
            age: age?.trim() ? age.trim() : null,
            sex: normalizedSex,
            city: city?.trim() ? city.trim() : null,
          },
        },
      },
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not update header data" },
      { status: 500 },
    );
  }
}
