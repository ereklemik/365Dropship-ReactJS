import "./selectProduct.css";
import Checkbox from "./Checkbox";
import Button from "../Header/Button";
import { addToCart } from "../../Components/API/API";

const SelectProduct = ({ selectedProducts, handleCheckbox, id }) => {
  return (
    <>
      <div
        className={`catalog__head ${
          selectedProducts.includes(id) ? "catalog__head--active" : ""
        }`}
      >
        <Checkbox
          handleCheckbox={handleCheckbox}
          id={id}
          isChecked={selectedProducts.includes(id)}
        />
        <span
          onClick={() => {
            addToCart(id, 1);
          }}
        >
          <Button
            content="add to inventory"
            className={"addToInventory--hover"}
          />
        </span>
      </div>
    </>
  );
};
export default SelectProduct;