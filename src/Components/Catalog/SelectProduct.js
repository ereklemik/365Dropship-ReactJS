import "./selectProduct.css";
import Checkbox from "./Checkbox";
import Button from "../Header/Button";
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
      <Button content="add to inventory" className={"addToInventory--hover"}/>
    </div>
  );
};
export default SelectProduct;