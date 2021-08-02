import React, { useEffect, useState } from "react";
import "./catalog.css";
import CatalogProduct from "./CatalogProduct";
import Modal from "../Modal/Modal";
import { getProducts } from "../../Components/API/API";
import ModifyProduct from "../../Pages/ModiyProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../Redux/Products/ProductsAction";

const Catalog = ({
  products,
  setProducts,
  selectedProducts,
  setSelectedProducts,
}) => {
  const [productModal, setProductModal] = useState(null);
  const productsList = useSelector((state) => state.products.productsList);

  const dispach = useDispatch();

  useEffect(() => {
    getProducts().then((result) => {
      dispach(getProductsAction(result));
    });
  }, []);

  const handleOpen = (products) => {
    setProductModal(products);
  };

  const handleClose = () => {
    setProductModal(null);
  };
  return (
    <>
      <ModifyProduct />
      <div className="catalog">
        {productsList &&
          productsList.map((product) => (
            <CatalogProduct
              price={product.price}
              title={product.title}
              image={product.imageUrl}
              id={product.id}
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
              key={product.id}
              handleOpen={handleOpen}
              description={product.description}
            />
          ))}
        {productModal && (
          <Modal product={productModal} handleClose={handleClose} />
        )}
      </div>
    </>
  );
};
export default Catalog;
