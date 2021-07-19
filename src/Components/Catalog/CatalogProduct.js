import SelectProduct from "./SelectProduct";

const CatalogProduct = ({
  image,
  title,
  price,
  product,
  openModal,
  selectedProducts,
  setSelectedProducts,
  handleOpen,
  id,
  selected,
  description,
  cartProduct,
  setCartProducts
}) => {
  const handleCheckbox = () => {
    setSelectedProducts([id, ...selectedProducts]);
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((item) => item !== id));
    }
  };

  const productClicked = () => {
    handleOpen({ id, image, title, price, description });
  };
  return (
    <div
      className={`catalog__product ${
        selectedProducts.includes(id) ? "catalog__product--border" : ""
      }`}
    >
      <SelectProduct
        catalogSelected={selected}
        handleCatalogSelect={handleCheckbox}
        handleCheckbox={handleCheckbox}
        selectedProducts={selectedProducts}
        id={id}
        cartProduct={cartProduct}
        setCartProducts={setCartProducts}
        
      />
      <div className="catalog__img" onClick={productClicked}>
        <img src={image} alt="" />
      </div>
      <div className="catalog__title">{title}</div>

      <div className="prices">
        <div>
          <p>$20</p>
          <p>RRP</p>
        </div>
        <div>
          <p>${price}</p>
          <p>COST</p>
        </div>
        <div className="profit">
          <p>20%($6)</p>
          <p>PROFIT</p>
        </div>
      </div>
    </div>
  );
};
export default CatalogProduct;
