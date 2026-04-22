import PrintPreview from "@/components/auth/account/myList/PrintPreview";
import { LangType } from "@/types/types";

export default async function PrintPreviewPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <PrintPreview lang={lang} />;
}
