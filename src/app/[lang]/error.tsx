"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations } from "@/data/translations";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];
  const lang = firstSegment === "ro" ? "ro" : "en";
  const t = translations[lang].globalError;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-4xl font-bold text-slate-900 md:text-5xl">
        {t.title}
      </h1>
      <p className="mb-6 max-w-xl text-slate-500">{t.description}</p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-(--secondary-color) px-5 py-2 text-white transition-colors hover:bg-(--secondary-color)/80"
        >
          {t.retry}
        </button>
        <Link
          href="/"
          className="rounded-lg border border-slate-300 px-5 py-2 text-slate-700 transition-colors hover:bg-slate-100"
        >
          {t.goHome}
        </Link>
      </div>

      {process.env.NODE_ENV !== "production" && (
        <pre className="mt-6 max-w-2xl overflow-x-auto rounded bg-slate-100 p-3 text-left text-xs text-red-600">
          {error.message}
        </pre>
      )}
    </div>
  );
}
