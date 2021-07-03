import "./modal.css";
const Modal = ({product, handleClose, price, image, title, description}) => {
  return (
      <>
          <div id="modal-wraper">
              <div className="modal">
                  <div className="modal__left">
                      <div className="modal__left-header">
                          <div>
                              <p>$20</p>
                              <p>RRP</p>
                          </div>
                          <div>
                              <p>${product.price}</p>
                              <p>COST</p>
                          </div>
                          <div className="modal__profit">
                              <p>20%($6)</p>
                              <p>PROFIT</p>
                          </div>
                      </div>
                      <div className="modal__image">
                          <img src={product.image} alt="image" />
                      </div>
                  </div>

                  <div className="modal__right">
                      <div className="modal__supplier">
                          <p>SKU# bgb-s0724578 COPY</p>
                          <p className="modal__supplier-details">
                              <span>Supplier:</span> <span>SP-Supplier115</span>
                          </p>
                      </div>
                      <p className="modal__title">${product.title}</p>
                      <button className="modal__add">Add to Inventory</button>
                      <div className="modal__details">
                          <div className="modal__details-header">
                              <div className="modal__details--active">Product Details</div>
                              <div>Shopping Rates</div>
                          </div>
                          <div className="modal__description">
                              <p>{product.description}
                            
                              </p>
                          </div>
                      </div>
                  </div>
                
              </div>
          </div>
          <div className="tint" onClick={handleClose}></div>
      </>

  );
};

export default Modal;
