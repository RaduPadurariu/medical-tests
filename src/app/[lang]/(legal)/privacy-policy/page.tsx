import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang].legal.privacyPolicy;
  const url = `/${lang}/privacy-policy`;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: url,
      languages: {
        en: `/en/privacy-policy`,
        ro: `/ro/privacy-policy`,
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

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}): Promise<React.ReactElement> {
  const { lang } = await params;
  return <PrivacyPolicy lang={lang} />;
}
