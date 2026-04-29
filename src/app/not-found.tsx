 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations } from "@/data/translations";

export default function NotFound() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];
  const lang = firstSegment === "ro" ? "ro" : "en";
  const t = translations[lang].notFound;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-2 text-2xl font-semibold">{t.title}</h2>
      <p className="mb-6 text-slate-500">{t.description}</p>
      <Link
        href={`/`}
        className="rounded-lg bg-(--secondary-color) px-5 py-2 text-white hover:bg-(--secondary-color)/80"
      >
        {t.goHome}
      </Link>
    </div>
  );
}
