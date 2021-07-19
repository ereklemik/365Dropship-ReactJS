import {
  cart,
  updateCartItem,
  removeFromCart,
  addToCart,
} from "../Components/API/API";
import { useEffect, useState } from "react";
import CatalogProduct from "../Components/Catalog/CatalogProduct";
import "./Inventory.css";
import { useLocation } from "react-router-dom";

const Inventory = ({
  selectedProducts,
  setSelectedProducts,
  
}) => {
  const [cartProduct, setCartProducts] = useState([]);
  const getCartProducts = async () => {
    const result = await cart();
    if (result) setCartProducts(result.cartItem.items);
  };

  const location = useLocation();
  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <div className="inventory">
      <section className="catalog">
        {cartProduct &&
          cartProduct.map((product) => (
            <>
              <CatalogProduct
                {...product}
                product={product}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />
            </>
          ))}
      </section>
    </div>
  );
};
export default Inventory;
