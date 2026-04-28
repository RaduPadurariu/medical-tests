import Account from "@/components/auth/account/Account";
import { LangType } from "@/types/types";
import { getCurrentUser } from "@/lib/currentUser";
export default async function AccountPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;

  const dbUser = await getCurrentUser();

  const userName = dbUser?.name || "User";

  return <Account lang={lang} userName={userName} />;
}
