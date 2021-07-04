import "./selectProduct.css";
import Checkbox from "./Checkbox";
import Button from "../Header/Button";
import {addToCart} from "../../Pages/Homepage/Api"
const SelectProduct = ({
  catalogSelected,
  handleCatalogSelect,
  handleCheckbox,
  selectedProducts,
  id,
}) => {
  return (
    <div
      className={`catalog__head ${
        catalogSelected ? "catalog__head--active" : ""
      }`}
    >
      <Checkbox
        checked={catalogSelected}
        handleCheckboxChange={handleCatalogSelect}
        handleCheckbox={handleCheckbox}
        id={id}
        isChecked={selectedProducts.includes(id)}
      />
    <span onClick={() =>{ addToCart(id,1)}} >
                <Button content="add to inventory" className={"addToInventory--hover"}/>
            </span>
    </div>
  );
};
export default SelectProduct;