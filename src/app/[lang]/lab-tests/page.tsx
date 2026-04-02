import MedicalTests from "@/components/medicalTests/MedicalTests";
import { LangType } from "@/types/types";

export default async function MedicalTestsPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: LangType }>;
  searchParams: Promise<{
    category: string;
    subcategory: string;
    q: string;
    page: string;
  }>;
}) {
  const { lang } = await params;
  const { category, subcategory, q, page } = await searchParams;
  return (
    <MedicalTests
      lang={lang}
      category={category ?? "all"}
      subcategory={subcategory ?? "all"}
      q={q ?? ""}
      page={page ?? "1"}
    />
  );
}
