import Account from "@/components/auth/account/Account";
import { authOptions } from "@/lib/auth";
import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";
import { LangType } from "@/types/types";
import { getServerSession } from "next-auth/next";

export default async function AccountPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  const session = await getServerSession(authOptions);
  const isLoggedIn = Boolean(session?.user?.email);
  let userName = "User";

  if (isLoggedIn && session?.user?.email) {
    await connectToDB();
    const dbUser = await User.findOne({
      email: session.user.email.toLowerCase(),
    }).select("name");

    userName = dbUser?.name || session.user.name || "User";
  }

  return <Account lang={lang} userName={userName} isLoggedIn={isLoggedIn} />;
}
