import { authOptions } from "@/lib/auth";
import { LangLayoutType } from "@/types/types";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
export default async function AccountLayout({
  children,
  params,
}: LangLayoutType) {
  const { lang } = await params;
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect(`/${lang}/signin`);
  return <>{children}</>;
}
