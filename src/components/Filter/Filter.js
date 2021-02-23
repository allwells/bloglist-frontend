import React from "react";
import StyledFilter from "./Filter.styled";

const Filter = ({ newFilter, filterChange }) => {
  return (
    <StyledFilter>
      <input
        className="textField"
        value={newFilter}
        onChange={filterChange}
        placeholder="Search authors"
      />
    </StyledFilter>
  );
};

export default Filter;
