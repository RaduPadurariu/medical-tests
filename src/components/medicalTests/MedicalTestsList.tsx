import { labTestsList, labTestsOptions } from "@/data/labTestsList";
import Image from "next/image";
import {
  LabTestCategoryKey,
  LabTestSubcategoryKey,
  LangType,
} from "@/types/types";
import LabTestAddToListButton from "./LabTestAddToListButton";
import { translations } from "@/data/translations";
import Pagination from "./Pagination";
import Link from "next/link";

const MedicalTestsList = ({
  lang,
  t,
  category,
  subcategory,
  q,
  page,
  savedAnalysisNames,
}: {
  lang: LangType;
  t: (typeof translations)[LangType]["medicalTests"];
  category: string;
  subcategory: string;
  q: string;
  page: string;
  savedAnalysisNames: string[];
}) => {
  const options = labTestsOptions[lang];
  const activeCategory = category && category !== "all" ? category : undefined;
  const activeSubcategory =
    subcategory && subcategory !== "all" ? subcategory : undefined;
  const needle = q.trim().toLowerCase();
  const normalizedSavedNames = new Set(
    savedAnalysisNames.map((name) => name.trim().toLocaleLowerCase()),
  );

  // Filter tests
  const filteredTests = labTestsList.filter((test) => {
    if (activeCategory && test.category !== activeCategory) return false;
    if (activeSubcategory && test.subcategory !== activeSubcategory)
      return false;
    if (!needle) return true;
    const name = test.name[lang].toLowerCase();
    const desc = test.description[lang].toLowerCase();
    return name.includes(needle) || desc.includes(needle);
  });

  if (filteredTests.length === 0) {
    return (
      <div className="medical-container">
        <p className="text-center text-sm text-(--text-color)">
          {t.noTestsFound}
        </p>
      </div>
    );
  }

  const testsPerPage = 12;
  const totalPages = Math.ceil(filteredTests.length / testsPerPage);
  const parsedPage = Number.parseInt(page, 10);
  const rawPage =
    Number.isFinite(parsedPage) && parsedPage >= 1 ? parsedPage : 1;
  const currentPage = Math.min(rawPage, totalPages);
  const startIndex = (currentPage - 1) * testsPerPage;
  const paginatedTests = filteredTests.slice(
    startIndex,
    startIndex + testsPerPage,
  );

  return (
    <div className="medical-container">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedTests.map((test) => {
          return (
            <li className="h-full" key={test.id}>
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-(--border-color) shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md">
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#edf2f7]">
                  <Image
                    src={test.image}
                    alt={test.name[lang]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-lg font-bold text-(--heading-color)">
                    {test.name[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-(--text-color)">
                    {test.description[lang]}
                  </p>
                  <div className="mt-4 flex flex-col gap-2 text-sm text-(--heading-color)">
                    <span className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-(--secondary-color)" />
                      {options.categories[test.category as LabTestCategoryKey]}
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-(--secondary-color)" />
                      {
                        options.subcategories[
                          test.subcategory as LabTestSubcategoryKey
                        ]
                      }
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                      <LabTestAddToListButton
                        addLabel={t.addToList}
                        addedLabel={t.addToListDone}
                        test={test}
                        lang={lang}
                        isInitiallyAdded={normalizedSavedNames.has(
                          test.name[lang].trim().toLocaleLowerCase(),
                        )}
                        className="min-w-[min(100%,10.5rem)] flex-1"
                      />
                      <Link
                        href={`/${lang}/lab-tests/${test.id}`}
                        className="inline-flex min-h-[42px] min-w-[min(100%,10.5rem)] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-(--secondary-color) bg-white px-4 py-2.5 text-sm font-semibold text-(--secondary-color) transition-colors hover:bg-(--secondary-color)/10"
                      >
                        {t.learnMore}
                        <i
                          className="fa-solid fa-arrow-right mt-0.5 text-xs"
                          aria-hidden
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default MedicalTestsList;
