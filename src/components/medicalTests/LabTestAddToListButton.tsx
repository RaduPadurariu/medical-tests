"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { LangType, TestType } from "@/types/types";

type Props = {
  addLabel: string;
  addedLabel: string;
  className?: string;
  test?: TestType;
  lang?: LangType;
};

export default function LabTestAddToListButton({
  addLabel,
  addedLabel,
  className = "",
  lang = "en",
}: Props) {
  const [added, setAdded] = useState(false);
  const { status } = useSession();

  const signInHref = `/${lang}/signin`;

  return (
    status === "authenticated" ? (
      <button
        type="button"
        onClick={() => setAdded((prev) => !prev)}
        aria-pressed={added}
        aria-live="polite"
        className={`inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
          added
            ? "cursor-default border-(--success-color) bg-(--success-color)/10 text-(--success-color)"
            : "border-(--secondary-color) bg-(--secondary-color) text-white hover:bg-blue-600"
        } ${className}`}
      >
        {added ? addedLabel : addLabel}
      </button>
    ) : (
      <Link
        href={signInHref}
        className={`inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 px-4 py-2.5 text-sm font-semibold transition-all duration-200 border-(--secondary-color) bg-(--secondary-color) text-white hover:bg-blue-600 ${className}`}
      >
        {addLabel}
      </Link>
    )
  );
}
