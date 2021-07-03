import "./search.css";
import { useState, useEffect } from "react";

const Search = ({
  fetchedProducts,
  setProducts,
  searchInput,
  setSearchInput,
  searchResult,
  setSearchResult,
}) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const search = () => {
    setSearchResult(searchInput);
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setSearchResult(e.target.value);
    }
  };

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    const res = products.filter((e) => {
      return e.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    setProducts(res);
  }, [searchResult]);

  return (
    <div classNameName={"search__content"}>
      <input
        id={"search"}
        className={"search__input"}
        type={"text"}
        placeholder={"Search"}
        value={searchInput}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <button
        id={"search__button"}
        className={"header__searchbtn"}
        type={"submit"}
        onClick={search}
      >
        <i className="fas fa-search fa-rotate-90"></i>
      </button>
    </div>
  );
};
export default Search;
