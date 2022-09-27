import React from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useAppContext } from "../context/appContext";
import { FormRow, FormRowSelect } from ".";

const SearchContainer = () => {
  const {
    search,
    searchType,
    searchStatus,
    sort,
    sortOptions,
    jobTypeOptions,
    statusOptions,
    clearFilters,
    isLoading,
    handleChange,
  } = useAppContext();
  const handleSearch = (e) => {
    if (isLoading) {
      console.log("b");
      return;
    }
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    clearFilters()
  }
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            name="search"
            type="text"
            handleChange={handleSearch}
            value={search}
          />
          <FormRowSelect
            name="searchStatus"
            labelText="status"
            value={searchStatus}
            list={["all", ...statusOptions]}
            handleChange={handleSearch}
          />
          <FormRowSelect
            name="searchType"
            labelText="type"
            value={searchType}
            list={["all", ...jobTypeOptions]}
            handleChange={handleSearch}
          />
          <FormRowSelect
            name="sort"
            value={sort}
            list={["all", ...sortOptions]}
            handleChange={handleSearch}
          />
          <button
            className="btn btn-block btn-danger"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
