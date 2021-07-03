import "./aside.css";
import { useState, useEffect } from "react";
import SelectProduct from "./SelectProduct";
import SelectShipping from "./SelectShipping";
import RangeSlider from "./RangeSlider";
import ResetFilters from "./ResetFilters";
import axios from "axios";

const Aside = ({ setProducts }) => {
  const [categories, setCategories] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const getCategories = async () =>
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));

  const filterByCategory = (items, choosenCategory) => {
    setProducts(
      items.filter(
        (product) =>
          product.category.toLowerCase() === choosenCategory.toLowerCase()
      )
    );
  };
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) filterByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <aside className="aside catalog__filter">
      <SelectProduct title="Niche" />
      <SelectProduct
        title="Category"
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <SelectShipping title="Ship From" />
      <SelectShipping title="Ship To" />
      <SelectShipping title="Select Supplier" />
      <RangeSlider
        title="Price"
        min="0"
        max="9999"
        From="0"
        To="4285"
        symbol="$"
      />
      <RangeSlider
        title="Profit"
        min="0"
        max="999"
        From="-12"
        To="97"
        symbol="%"
      />
      <ResetFilters />
    </aside>
  );
};
export default Aside;
