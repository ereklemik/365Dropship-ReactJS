import "./main.css";
import Catalog from "../Catalog/Catalog";

const Main = ({
  products,
  setProducts,
  selectedProducts,
  setSelectedProducts,
  unselectAll,
}) => {
  
  
  return (
    <main className="main">
      <Catalog
        products={products}
        setProducts={setProducts}
       
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        unselectAll={unselectAll}
      />
    </main>
  );
};

export default Main;
