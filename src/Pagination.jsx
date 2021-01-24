import React, { useState } from "react";
import PaginationOne from "./PaginationOne";
import PaginationTwo from "./PaginationTwo";
import './pagination.css';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allPages, setAllPages] = useState(10);

  return (
    <div className="layout">
      <label htmlFor="current">Current page: </label>
      <input
        id="current"
        type="number"
        placeholder="Current page"
        style={{ "margin-right": "16px" }}
        min={1}
        value={currentPage}
        onChange={(e) => setCurrentPage(parseInt(e.target.value))}
      />
      <label htmlFor="total">Total pages: </label>
      <input
        id="total"
        type="number"
        placeholder="Total pages"
        min={1}
        value={allPages}
        onChange={(e) => setAllPages(parseInt(e.target.value))}
      />
      <PaginationOne currentPage={currentPage} allPages={allPages} />
      <PaginationTwo currentPage={currentPage} allPages={allPages} />
    </div>
  );
};

export default Pagination;
