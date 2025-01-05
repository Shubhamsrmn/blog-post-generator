"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For router.replace
import { createPortal } from "react-dom";

type Props = {
  page: number;
  totalPages: number;
  pageSize: number;
  link: string;
};

const PaginationButtons = ({ page, totalPages, pageSize, link }: Props) => {
  const router = useRouter();
  const [footerElement, setFooterElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setFooterElement(
      document.getElementsByClassName(
        "main-footer-pagination"
      )[0] as HTMLElement
    );
  }, []);

  if (!footerElement) {
    return null; // Prevent rendering until the footer element is available
  }

  const visiblePages = 3;
  const startPage = Math.max(1, page - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const navigateToPage = (newPage: number) => {
    router.replace(`${link}?page=${newPage}&limit=${pageSize}`);
  };

  return createPortal(
    <div className="flex justify-center space-x-2 my-4">
      {/* Previous Button */}
      <button
        onClick={() => navigateToPage(page - 1)}
        disabled={page <= 1}
        className={`px-4 py-2 rounded ${
          page <= 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Previous
      </button>

      {/* Pagination Buttons */}
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      ).map((currentPage) => (
        <button
          key={currentPage}
          onClick={() => navigateToPage(currentPage)}
          className={`px-4 py-2 rounded ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {currentPage}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => navigateToPage(page + 1)}
        disabled={page >= totalPages}
        className={`px-4 py-2 rounded ${
          page >= totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Next
      </button>
    </div>,
    footerElement
  );
};

export default PaginationButtons;
