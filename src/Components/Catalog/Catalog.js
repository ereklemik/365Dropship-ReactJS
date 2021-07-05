import React, { useEffect, useState } from "react";
import "./catalog.css";
import CatalogProduct from "./CatalogProduct";
import Modal from "../Modal/Modal";
import Sort from "../Header/Sort";
import {getProducts} from "../../Components/API/API";

const Catalog = ({
  products,
  setProducts,
  selectedProducts,
  setSelectedProducts,
}) => {
  const [productModal, setProductModal] = useState(null);
  
  useEffect(() => {
    try {
      getProducts().then((item) => {
        setProducts(item);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);


  const handleOpen = (products) => {
    setProductModal(products);
  };

  const handleClose = () => {
    setProductModal(null);
  };
  return (
    <>
      <div className="sort">
        <Sort products={products} setProducts={setProducts} />
      </div>
      <div className="catalog">
        {products.map((product) => (
          
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
