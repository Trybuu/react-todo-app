import React from "react";
import "./FilterList.css";
const FilterList = (props) => {
  return (
    <div className="filter-list-wrapper">
      <div className="filter-list">
        <span
          onClick={props.categoryChange}
          name="all"
          className={`filter-list__category ${
            props.category === "All" ? "active" : null
          }`}
        >
          All
        </span>
        <span
          onClick={props.categoryChange}
          className={`filter-list__category ${
            props.category === "Active" ? "active" : null
          }`}
        >
          Active
        </span>
        <span
          onClick={props.categoryChange}
          className={`filter-list__category ${
            props.category === "Completed" ? "active" : null
          }`}
        >
          Completed
        </span>
      </div>
    </div>
  );
};

export default FilterList;
