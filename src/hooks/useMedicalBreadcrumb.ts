import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useMedicalBreadcrumb = ({
  lang,
  currentPageLabel,
}: {
  lang: LangType;
  currentPageLabel?: string;
}) => {
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
        [`/${lang}/login`]: t.login,
        [`/${lang}/register`]: t.register,
      };

      const fallback =
        defaultLabels[href] || decodeURIComponent(href.split("/").pop() || "");
      const label =
        currentPageLabel && href === pathname ? currentPageLabel : fallback;
      return { href, label };
    });

    return crumbs; // [{ href: "/[lang]", label: "Home" }, { href: "/[lang]/lab-tests", label: "Lab Tests" }, { href: "/[lang]/lab-tests/[id]", label: "Test 1" }]
  }, [pathname, lang, currentPageLabel]);

  return breadcrumbs;
};
