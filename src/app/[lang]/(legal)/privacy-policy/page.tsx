import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import { LangType } from "@/types/types";

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <PrivacyPolicy lang={lang} />;
}
