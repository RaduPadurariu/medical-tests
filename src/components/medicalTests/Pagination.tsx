"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const delta = 1; // how many pages to show before/after the current page

    // mereu prima pagină
    pages.push(1);

    // dots before if we are far from the first page
    if (currentPage - delta > 2) {
      pages.push("…");
    }

    // pages around the current page
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      pages.push(i);
    }

    // dots after if we are far from the last page
    if (currentPage + delta < totalPages - 1) {
      pages.push("…");
    }

    // always the last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
  };

  return (
    <ul className="flex items-center w-full justify-center mt-10">
      <li>
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 cursor-pointer text-(--heading-color) py-1 text-sm leading-10 disabled:opacity-50 disabled:cursor-default"
        >
          &lt; Previous
        </button>
      </li>

      {visiblePages.map((page, index) =>
        page === "…" ? (
          <li key={`dots-${index}`} className="px-3 py-1">
            …
          </li>
        ) : (
          <li key={page}>
            <button
              disabled={currentPage === page}
              onClick={() => handlePageChange(page as number)}
              className={`px-3 py-1 text-(--heading-color) ${
                currentPage === page ? "opacity-50" : "cursor-pointer"
              }`}
            >
              {page}
            </button>
          </li>
        ),
      )}

      <li>
        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-2 py-1 cursor-pointer text-(--heading-color) disabled:opacity-50 disabled:cursor-default"
        >
          Next &gt;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
