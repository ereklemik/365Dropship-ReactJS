import "./selectProduct.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
const SelectProduct = ({ title, setSelectedCategory, categories }) => {
  const history = useHistory();
  const categoryChangeHandler = (e) => {
    setSelectedCategory(e.target.value);
    history.push(`/catalog/${e.target.value}`);
  };

  return (
    <div
      className={"select-product__wrapper select-product__wrapper--" + title}
    >
      <select
        onChange={categoryChangeHandler}
        className={"select-product__options select-product__options--" + title}
      >
        <option>Choose {title}</option>
        {categories &&
          categories.map((item) => {
            return <option value={item}>{item}</option>;
          })}
      </select>
    </div>
  );
};

export default SelectProduct;
