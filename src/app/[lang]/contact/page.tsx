import Contact from "@/components/contact/Contact";
import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang].contactPage;
  const url = `/${lang}/contact`;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: url,
      languages: {
        en: "/en/contact",
        ro: "/ro/contact",
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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <Contact lang={lang} />;
}
