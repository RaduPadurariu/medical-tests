"use client";

import { labTestsOptions } from "@/data/labTestsList";
import { LangType } from "@/types/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const MedicalTestsFilterSection = ({
  lang,
  category,
  subcategory,
  q,
}: {
  lang: LangType;
  category: string;
  subcategory: string;
  q: string;
}) => {
  const options = labTestsOptions[lang];
  const [search, setSearch] = useState(q ?? "");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setSearch(q);
  }, [q]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearch(value);
    const params = new URLSearchParams(searchParams.toString());
    const trimmed = value.trim();
    if (trimmed) {
      params.set("q", trimmed);
      params.set("page", "1");
    } else {
      params.delete("q");
      params.set("page", "1");
    }

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set("category", value);
      params.set("page", "1");
    } else {
      params.delete("category");
      params.set("page", "1");
    }
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
  };

  const handleSubcategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set("subcategory", value);
      params.set("page", "1");
    } else {
      params.delete("subcategory");
      params.set("page", "1");
    }
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
  };

  return (
    <div className="medical-container py-10">
      <div className="mb-8 rounded-xl border border-(--border-color) bg-white p-6 shadow-sm md:p-8">
        <div>
          <label
            htmlFor="lab-tests-search"
            className="mb-1.5 block text-sm font-medium text-(--heading-color)"
          >
            {options.searchLabel}
          </label>
          <input
            id="lab-tests-search"
            type="search"
            name="q"
            value={search}
            onChange={handleSearch}
            autoComplete="off"
            placeholder={options.searchPlaceholder}
            className="w-full rounded-lg border border-(--border-color) bg-white px-3 py-2.5 text-sm text-(--heading-color) outline-none ring-(--secondary-color) transition-shadow placeholder:text-(--text-muted) focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/20"
          />
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label
              htmlFor="lab-tests-sample-type"
              className="mb-1.5 block text-sm font-medium text-(--heading-color)"
            >
              {options.sampleTypeLabel}
            </label>
            <select
              id="lab-tests-sample-type"
              name="category"
              value={category}
              className="w-full rounded-lg border border-(--border-color) bg-white px-3 py-2.5 text-sm text-(--heading-color) outline-none ring-(--secondary-color) focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/20"
              onChange={handleCategoryChange}
            >
              <option value="all">{options.categories.all}</option>
              <option value="blood">{options.categories.blood}</option>
              <option value="urine">{options.categories.urine}</option>
              <option value="stool">{options.categories.stool}</option>
            </select>
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="lab-tests-clinical-area"
              className="mb-1.5 block text-sm font-medium text-(--heading-color)"
            >
              {options.clinicalAreaLabel}
            </label>
            <select
              id="lab-tests-clinical-area"
              name="subcategory"
              value={subcategory}
              onChange={handleSubcategoryChange}
              className="w-full rounded-lg border border-(--border-color) bg-white px-3 py-2.5 text-sm text-(--heading-color) outline-none ring-(--secondary-color) focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/20"
            >
              <option value="all">{options.subcategories.all}</option>
              <option value="general">{options.subcategories.general}</option>
              <option value="heart">{options.subcategories.heart}</option>
              <option value="diabetes">{options.subcategories.diabetes}</option>
              <option value="hormones">{options.subcategories.hormones}</option>
              <option value="liver">{options.subcategories.liver}</option>
              <option value="kidney">{options.subcategories.kidney}</option>
              <option value="minerals">{options.subcategories.minerals}</option>
              <option value="prostate">{options.subcategories.prostate}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalTestsFilterSection;
