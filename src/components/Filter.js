import React from "react";

const Filter = ({ newFilter, filterChange }) => {
  return (
    <div>
      <input
        value={newFilter}
        onChange={filterChange}
        placeholder="Search blog by authors"
      />
    </div>
  );
};

export default Filter;
