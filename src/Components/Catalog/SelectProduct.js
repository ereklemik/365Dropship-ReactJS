import "./selectProduct.css";
import Checkbox from "./Checkbox";
import Button from "../Header/Button";
import {
  addToCart,
  deleteProduct,
  getCart,
  getProducts,
} from "../../Components/API/API";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useSnackbar } from "notistack";
import { getProductsAction } from "../../Redux/Products/ProductsAction";
import { editModalOpenAction } from "../../Redux/Modal/ModalAction";

const SelectProduct = ({ selectedProducts, handleCheckbox, id }) => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const { enqueueSnackbar } = useSnackbar();
  const dispach = useDispatch();
  const addCart = async () => {
    addToCart(id, 1)
      .then(() => {
        let variant = "success";
        enqueueSnackbar("product added!", { variant });
      })
      .catch((err) => {
        let variant = "error";
        enqueueSnackbar("product add failed", { variant });
      });
  };
  const editClick = () => {
    dispach(editModalOpenAction(id));
  };
  const deleteprod = async () => {
    await deleteProduct(id);
    await getProducts()
      .then((result) => {
        dispach(getProductsAction(result));
      })
      .then(() => {
        let variant = "success";
        enqueueSnackbar("product deleted successfully", { variant });
      })
      .catch((err) => {
        let variant = "error";
        enqueueSnackbar("delete product failed", { variant });
      });
  };

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
          <div className="catalog__hover-button">
            {user && user.isAdmin && (
              <>
                <EditIcon style={{ color: "#61d5df" }} onClick={editClick} />
                <DeleteIcon style={{ color: "#61d5df" }} onClick={deleteprod} />
              </>
            )}
            <Button
              content="add to inventory"
              className={"addToInventory--hover"}
            />
          </div>
        </span>
      </div>
    </>
  );
};
export default SelectProduct;
