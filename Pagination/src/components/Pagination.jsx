import React, { useState } from "react";

const Pagination = ({
  count = 5,
  defaultPage = 1,
  boundaryCount = 1,
  onChange,
  disabled = false,
  totalPages = 20,
}) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const calculatePages = () => {
    const startPage = Math.max(1, currentPage - Math.floor(count / 2));
    const endPage = Math.min(totalPages, startPage + count - 1);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const handleClick = (page) => {
    if (disabled) return;
    setCurrentPage(page);
    if (onChange) onChange(page);
  };

  const handleLeftClick = () => {
    if (disabled || currentPage <= 1) return;
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    if (onChange) onChange(newPage);
  };

  const handleRightClick = () => {
    if (disabled || currentPage >= totalPages) return;
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    if (onChange) onChange(newPage);
  };

  const pages = calculatePages();

  return (
    <div className="pagination-wrapper">
      <span
        className={`page-count ${currentPage === 1 ? "disabled" : ""}`}
        onClick={handleLeftClick}
      >
        ⬅️
      </span>
      {pages.map((page) => (
        <span
          className={`page-count ${currentPage === page ? "active" : ""}`}
          key={`page-${page}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </span>
      ))}
      <span
        className={`page-count ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={handleRightClick}
      >
        ➡️
      </span>
    </div>
  );
};

export default Pagination;
