import { labTestsOptions } from "@/data/labTestsList";
import {
  LangType,
  LabTestCategoryKey,
  LabTestSubcategoryKey,
  TestType,
} from "@/types/types";
import Image from "next/image";
import PageHeader from "../pageHeader/PageHeader";
import MedicalBreadcrumbs from "../breadcrumbs/MedicalBreadcrumbs";
import { translations } from "@/data/translations";
import LabTestAddToListButton from "./LabTestAddToListButton";

const SingleTest = ({ test, lang }: { test: TestType; lang: LangType }) => {
  const title = test.name[lang];
  const shortDescription = test.description[lang];
  const options = labTestsOptions[lang];
  const categoryLabel = options.categories[test.category as LabTestCategoryKey];
  const subcategoryLabel =
    options.subcategories[test.subcategory as LabTestSubcategoryKey];

  const detail = translations[lang].singleTestPage;
  const medicalTestsLabels = translations[lang].medicalTests;

  return (
    <section className="py-12 md:py-16">
      <PageHeader title={title} description={shortDescription} />
      <MedicalBreadcrumbs lang={lang} currentPageLabel={title} />

      <div className="medical-container mt-10 space-y-14 md:mt-12 md:space-y-16">
        {/* Top: key points + hero image + reference range overlay */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <ul className="space-y-8">
            <li className="flex gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-(--secondary-color)/15 text-(--secondary-color)"
                aria-hidden
              >
                <i className={`fa-solid fa-droplet text-lg`} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-(--heading-color)">
                  {detail.highlightsMeasures}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-(--text-color)">
                  {test.detailPage?.whatItMeasures[lang]}
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-(--secondary-color)/15 text-(--secondary-color)"
                aria-hidden
              >
                <i className={`fa-solid fa-stethoscope text-lg`} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-(--heading-color)">
                  {detail.highlightsMatters}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-(--text-color)">
                  {test.detailPage?.whyItMatters[lang]}
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-(--secondary-color)/15 text-(--secondary-color)"
                aria-hidden
              >
                <i className={`fa-solid fa-clock text-lg`} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-(--heading-color)">
                  {detail.highlightsTurnaround}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-(--text-color)">
                  {test.detailPage?.typicalTurnaround[lang]}
                </p>
              </div>
            </li>
          </ul>

          <div className="relative w-full">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-[#edf2f7] shadow-sm">
              <Image
                src={test.image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative z-10 -mt-10 mx-2 rounded-xl border border-(--border-color) bg-white px-5 py-4 shadow-md sm:mx-6 md:mx-10">
              <p className="text-center text-xs font-semibold uppercase tracking-wide text-(--text-muted)">
                {detail.referenceRangeTitle}
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-(--border-color) px-3 py-2 text-center">
                  <p className="flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm">
                    <span className="font-semibold uppercase tracking-wide text-(--text-muted)">
                      {detail.men}
                    </span>
                    <span className="font-bold text-(--secondary-color)">
                      {test.detailPage?.referenceMinMale} -{" "}
                      {test.detailPage?.referenceMaxMale}
                    </span>
                    <span className="text-(--text-muted)">
                      {test.detailPage?.unitMeasure}
                    </span>
                  </p>
                </div>
                <div className="rounded-lg border border-(--border-color) px-3 py-2 text-center">
                  <p className="flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm">
                    <span className="font-semibold uppercase tracking-wide text-(--text-muted)">
                      {detail.women}
                    </span>
                    <span className="font-bold text-(--secondary-color)">
                      {test.detailPage?.referenceMinFemale} -{" "}
                      {test.detailPage?.referenceMaxFemale}
                    </span>
                    <span className="text-(--text-muted)">
                      {test.detailPage?.unitMeasure}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-3 flex justify-center">
                <LabTestAddToListButton
                  addLabel={medicalTestsLabels.addToList}
                  addedLabel={medicalTestsLabels.addToListDone}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: long copy + categories / tags */}
        <div className="rounded-2xl border border-(--border-color) bg-[#f8f9fa] p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-xl font-bold text-(--heading-color) md:text-2xl">
                {detail.sectionTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-(--text-color) md:text-base">
                {test.detailPage?.longDescription[lang]}
              </p>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-(--text-muted)">
                {detail.stepsTitle}
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-(--border-color) bg-white px-4 py-3 text-sm text-(--heading-color)">
                  <i
                    className={`fa-solid fa-clipboard-list mt-0.5 shrink-0 text-(--secondary-color)`}
                    aria-hidden
                  />
                  <span>{detail.stepList}</span>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-(--border-color) bg-white px-4 py-3 text-sm text-(--heading-color)">
                  <i
                    className={`fa-solid fa-id-card mt-0.5 shrink-0 text-(--secondary-color)`}
                    aria-hidden
                  />
                  <span>{detail.stepId}</span>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-(--border-color) bg-white px-4 py-3 text-sm text-(--heading-color)">
                  <i
                    className={`fa-solid fa-mug-hot mt-0.5 shrink-0 text-(--secondary-color)`}
                    aria-hidden
                  />
                  <span>{detail.stepFasting}</span>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-(--border-color) bg-white px-4 py-3 text-sm text-(--heading-color)">
                  <i
                    className={`fa-solid fa-star mt-0.5 shrink-0 text-(--secondary-color)`}
                    aria-hidden
                  />
                  <span>
                    {test.detailPage?.stepSpecial[lang] || detail.stepSpecial}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-xl border border-(--border-color) bg-white p-5 md:p-6">
                <h3 className="text-sm font-semibold text-(--heading-color)">
                  {detail.categoriesHeading}
                </h3>
                <p className="mt-1 text-xs text-(--text-muted)">
                  {detail.categoriesSubtitle}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex rounded-full border border-(--border-color) bg-white px-3 py-1.5 text-sm text-(--heading-color)">
                    {categoryLabel}
                  </span>
                  <span className="inline-flex rounded-full border border-(--border-color) bg-white px-3 py-1.5 text-sm text-(--heading-color)">
                    {subcategoryLabel}
                  </span>
                </div>
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-xl border border-amber-200/80 bg-amber-50/80 p-4 text-sm text-(--heading-color)">
                  <p className="font-semibold text-amber-900">
                    {detail.belowReference}
                  </p>
                  <p className="mt-2 leading-relaxed text-amber-950/90">
                    {test.detailPage?.belowReference[lang]}
                  </p>
                </div>
                <div className="rounded-xl border border-sky-200/80 bg-sky-50/80 p-4 text-sm text-(--heading-color)">
                  <p className="font-semibold text-sky-900">
                    {detail.aboveReference}
                  </p>
                  <p className="mt-2 leading-relaxed text-sky-950/90">
                    {test.detailPage?.aboveReference[lang]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-(--text-muted)">
          {detail.disclaimer}
        </p>
      </div>
    </section>
  );
};

export default SingleTest;
