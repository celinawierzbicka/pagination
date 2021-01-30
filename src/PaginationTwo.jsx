import React from "react";
import './pagination.css';

const getArray = (currentPage, allPages) => {
  const startNumbers = Array.from({ length: 3 }, (v, k) => k + 1);
  const middleNumbers = Array.from({ length: 3 }, (v, k) => k + (currentPage - 1));
  const endNumbers = Array.from({ length: 3 }, (v, k) => k + (allPages - 2));

  //Returns array of uniquie numbers within 1 - allPages range and sorted in ascending order
  const result = [
    ...new Set([...startNumbers, ...middleNumbers, ...endNumbers].filter((p) => p > 0 && p <= allPages)),
  ].sort((a, b) => a - b);

  //Returns array filled with missing numbers and "..."
  const arr = result.flatMap((page, index) => {
    if (page === 1 || page - result[index - 1] === 1) {
      return page;
    } else if (page - result[index - 1] === 2) {
      return [page - 1, page];
    } else {
      return ["...", page];
    }
  });

  return arr;
};

const PaginationTwo = ({ currentPage, allPages }) => {
  const pagesArray = getArray(currentPage, allPages) || [];

  if (currentPage > allPages) return <div className="wrapper">Current Page can not be greater than total number of pages.</div>;
  if (!currentPage || !allPages) return <div className="wrapper">Value must be a number.</div>;

  return (
    <div className="wrapper">
      <p>Implementation Two: {pagesArray.map((p) => `${p} `)}</p>
    </div>
  );
};

export default PaginationTwo;
