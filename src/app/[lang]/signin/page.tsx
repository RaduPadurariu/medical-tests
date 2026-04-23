import SignIn from "@/components/auth/signin/SignIn";
import { LangType } from "@/types/types";

export default async function SignInPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <SignIn lang={lang} />;
}
