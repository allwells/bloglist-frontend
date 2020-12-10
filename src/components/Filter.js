import React from "react";

const Filter = ({ newFilter, filterChange }) => {
  return (
    <div>
      <input
        value={newFilter}
        onChange={filterChange}
        placeholder="Search blogs titles"
      />
    </div>
  );
};

export default Filter;
