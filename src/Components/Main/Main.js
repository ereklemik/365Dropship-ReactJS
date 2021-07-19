import "./main.css";
import Catalog from "../Catalog/Catalog";

const Main = ({
  products,
  setProducts,
  selectedProducts,
  setSelectedProducts,
  unselectAll,
  cartProduct,
  setCartProducts
}) => {
  
  
  return (
    <main className="main">
      <Catalog
        products={products}
        setProducts={setProducts}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        unselectAll={unselectAll}
        cartProduct={cartProduct}
        setCartProducts={setCartProducts}
      />
    </main>
  );
};

export default Main;
