"use client";

import { useState } from "react";

type Props = {
  addLabel: string;
  addedLabel: string;
  className?: string;
};

export default function LabTestAddToListButton({
  addLabel,
  addedLabel,
  className = "",
}: Props) {
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setAdded(true)}
      disabled={added}
      aria-pressed={added}
      aria-live="polite"
      className={`inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
        added
          ? "cursor-default border-(--success-color) bg-(--success-color)/10 text-(--success-color)"
          : "border-(--secondary-color) bg-(--secondary-color) text-white hover:bg-blue-600"
      } ${className}`}
    >
      {added ? (
        <>
          {addedLabel}
          {/* <i className="fa-solid fa-check text-xs" aria-hidden /> */}
        </>
      ) : (
        <>
          {addLabel}
          {/* <i className="fa-solid fa-plus text-xs" aria-hidden /> */}
        </>
      )}
    </button>
  );
}
