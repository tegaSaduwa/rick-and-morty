import React from "react";

const Search = ({ updatePageNumber, setSearch }) => {
  return (
    <div className="d-flex justify-content-center  mt-3">
      <span className="col-6 mt-3 mx-3">
        <input
          className="form-control mr-5"
          type="search"
          placeholder="Search a Character"
          onChange={(e) => {
            updatePageNumber(1);
            setSearch(e.target.value);
          }}
        />
      </span>
    </div>
  );
};

export default Search;
