import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useMedicalBreadcrumb = ({ lang }: { lang: LangType }) => {
  const pathname = usePathname();
  const breadcrumbs = useMemo(() => {
    const t = translations[lang].breadcrumbs;
    const segments = pathname.split("/").filter(Boolean);

    const pathArray = segments.map(
      (_, i) => "/" + segments.slice(0, i + 1).join("/"),
    );

    const crumbs = pathArray.map((href) => {
      const defaultLabels: Record<string, string> = {
        [`/${lang}`]: t.home,
        [`/${lang}/lab-tests`]: t.labTests,
        [`/${lang}/contact`]: t.contact,
        [`/${lang}/my-list`]: t.myList,
      };

      return {
        href,
        label:
          defaultLabels[href] ||
          decodeURIComponent(href.split("/").pop() || ""),
      };
    });

    return crumbs;
  }, [pathname, lang]);

  return breadcrumbs;
};
