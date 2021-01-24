import React from "react";
import './pagination.css';

const getArray = (currentPage, allPages) => {
  let arr = [];
  for (let i = 0; i < allPages; i++) {
    const page = i + 1;
    const isBelowCurrentPage = page < currentPage;
    const isNearCurrentPage = [currentPage - 1, currentPage, currentPage + 1].includes(page);
    const shouldDisplayNumber =
      page <= 3 ||
      page > allPages - 3 ||
      allPages === 7 ||
      isNearCurrentPage ||
      (isBelowCurrentPage && currentPage - arr[i - 1] <= 3) ||
      (!isBelowCurrentPage && allPages - currentPage <= 5);

    if (shouldDisplayNumber) {
      arr.push(page);
    } else if (arr[arr.length - 1] !== "...") {
      arr.push("...");
    }
  }
  return arr;
};

const PaginationOne = ({ currentPage, allPages }: *) => {
  const pagesArray = getArray(currentPage, allPages) || [];

  if (currentPage > allPages) return <div className="wrapper">Current Page can not be greater than total number of pages.</div>;
  if (!currentPage || !allPages) return <div className="wrapper">Value must be a number.</div>;

  return (
    <div className="wrapper">
      <p>Implementation One: {pagesArray.map((p) => `${p} `)}</p>
    </div>
  );
};

export default PaginationOne;
