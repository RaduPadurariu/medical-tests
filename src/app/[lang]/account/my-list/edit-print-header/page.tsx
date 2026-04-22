import EditPrintHeader from "@/components/auth/account/myList/EditPrintHeader";
import { LangType } from "@/types/types";

export default async function EditPrintHeaderPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <EditPrintHeader lang={lang} />;
}
