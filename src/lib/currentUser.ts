import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { connectToDB } from "./mongodb";
import User from "@/models/User";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email?.toLowerCase();
  if (!email) return null;
  await connectToDB();
  return User.findOne({ email });
}
