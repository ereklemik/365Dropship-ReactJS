import Button from "./Button";
import Search from "./Search";
import "./header.css";
import SelectProduct from "../Catalog/SelectProduct";
const Header = ({
  products,
  setProducts,
  fetchedProducts,
  setFetchedProducts,
  searchInput,
  setSearchInput,
  searchResult,
  setSearchResult,
  selectedProducts,
  setSelectedProducts,
  sellectAllProducts,
  unselectAll
}) => {
  return (
    <>
      <header className={"header"}>
        <div className={"header__content"}>
          <div className="header__select" onClick={sellectAllProducts}>
          <Button content={"Select All"} className={'selectall'}/>
          </div>
          <span className={"header__selection"}>
            selected {selectedProducts.length} out of {products.length} products
          </span>
          <div className="unselect" onClick={unselectAll}>
          {selectedProducts.length ? <Button content={"Clear All"} className={'clearall'}/> : null}
          </div>
        </div>
        <div className={"header__content"}>
          <Search
            products={products}
            setProducts={setProducts}
            fetchedProducts={fetchedProducts}
            setFetchedProducts={setFetchedProducts}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            searchResult={searchResult}
            setSearchResult={setSearchResult}
          />
          <Button content={"add to inventory"} className={"addToInventory--main"} />
          <i className="far fa-question-circle header__questionmark"></i>
        </div>
      </header>
    </>
  );
};

export default Header;