"use client";

import { useMedicalBreadcrumb } from "@/hooks/useMedicalBreadcrumb";

import { LangType } from "@/types/types";
import Link from "next/link";

const MedicalBreadcrumbs = ({
  lang,
  currentPageLabel,
}: {
  lang: LangType;
  currentPageLabel?: string;
}) => {
  const breadcrumbs = useMedicalBreadcrumb({ lang, currentPageLabel });

  return (
    <div className="w-full  bg-[#f8f9fa]">
      <div className="medical-container py-2.5">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex flex-wrap items-center gap-x-2">
            {breadcrumbs.map((crumb, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={crumb.href}>
                  {!isLast ? (
                    <>
                      <Link
                        href={crumb.href}
                        className="text-(--secondary-color) transition-colors hover:underline"
                      >
                        {crumb.label}
                      </Link>
                      <span>&nbsp;&nbsp;&nbsp;/</span>
                    </>
                  ) : (
                    <span className="text-(--heading-color)">
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default MedicalBreadcrumbs;
