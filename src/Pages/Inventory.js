import { cart } from "./Homepage/Api";
import { useEffect, useState } from "react";
import CatalogProduct from "../Components/Catalog/CatalogProduct";
const Inventory = ({ selectedItems, setSelectedItems }) => {
  const [cartProduct, setCartProducts] = useState([]);
  const getCartProducts = async () => {
    const result = await cart();
    if (result) setCartProducts(result.cartItem.items);
  };

  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <section className="catalog">
      {cartProduct &&
        cartProduct.map((product) => (
          <>
            <CatalogProduct
              {...product}
              product={product}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </>
        ))}
    </section>
  );
};
export default Inventory;
