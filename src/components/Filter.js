import React from "react";

const Filter = ({ newFilter, filterChange }) => {
  return (
    <div>
      filter: <input value={newFilter} onChange={filterChange} />
    </div>
  );
};

export default Filter;
