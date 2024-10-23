"use client";

import { formUrlQuery } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  page: number | string;
  totalPages: number;
};

const Pagination = ({ page, totalPages }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onPageClick = (pageNumber: number) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: pageNumber.toString(),
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex justify-center gap-2">
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <>
            <button
              key={pageNumber}
              onClick={() => onPageClick(pageNumber)}
              className="relative sm:inline-flex h-8 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span
                className={`${
                  pageNumber === Number(page) ? "bg-blue-900" : " bg-slate-950"
                } inline-flex h-full w-full items-center justify-center rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl`}
              >
                {pageNumber}
              </span>
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Pagination;
