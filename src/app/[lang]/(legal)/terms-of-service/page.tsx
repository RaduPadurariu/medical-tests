import TermsOfService from "@/components/legal/TermsOfService";
import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang].legal.termsOfService;
  const url = `/${lang}/terms-of-service`;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: url,
      languages: {
        en: `/en/terms-of-service`,
        ro: `/ro/terms-of-service`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url,
      type: "website",
    },
    twitter: {
      title: t.title,
      description: t.description,
      card: "summary_large_image",
    },
  };
}

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <TermsOfService lang={lang} />;
}
