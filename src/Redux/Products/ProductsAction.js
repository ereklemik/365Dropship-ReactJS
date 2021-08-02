import {
    CART_PRODUCT_UPDATED,
    CATEGORY_VALUE_CHANGED,
    PRODUCT_UPDATED,
    SEARCH_TYPE_CHANGED,
    SORT_TYPE_CHANGED,

  } from "../ActionTypes/ActionTypes";

  
    
  export const getProductsAction = (products) => {
    return {
      type: PRODUCT_UPDATED,
      payload: products,
    };
  };
  
  
  
  export const getCartProductsAction = (products) => {
    return {
      type: CART_PRODUCT_UPDATED,
      payload: products,
    };
  };
  