"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LangType, TestType } from "@/types/types";

type Props = {
  addLabel: string;
  addedLabel: string;
  className?: string;
  test: TestType;
  lang?: LangType;
  isInitiallyAdded?: boolean;
};

export default function LabTestAddToListButton({
  addLabel,
  addedLabel,
  className = "",
  test,
  lang = "en",
  isInitiallyAdded = false,
}: Props) {
  const [added, setAdded] = useState(isInitiallyAdded);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  const signInHref = `/${lang}/signin`;
  const testName = test.name[lang];

  const handleAddToList = async () => {
    if (isSubmitting || added) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/account/saved-analyses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: testName }),
      });

      if (response.ok || response.status === 409) {
        setAdded(true);
        router.refresh();
        return;
      }

      console.error("Failed to add test to list");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    status === "authenticated" ? (
      <button
        type="button"
        onClick={handleAddToList}
        aria-pressed={added}
        aria-live="polite"
        disabled={added || isSubmitting}
        className={`inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
          added
            ? "cursor-default border-(--success-color) bg-(--success-color)/10 text-(--success-color)"
            : "border-(--secondary-color) bg-(--secondary-color) text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-400"
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
