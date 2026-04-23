import TermsOfService from "@/components/legal/TermsOfService";
import { LangType } from "@/types/types";

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <TermsOfService lang={lang} />;
}
