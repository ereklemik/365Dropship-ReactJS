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
  
  export const changeSortTypeAction = (value) => {
    return {
      type: SORT_TYPE_CHANGED,
      payload: value,
    };
  };
  export const changeSearchTypeAction = (value) => {
    return {
      type: SEARCH_TYPE_CHANGED,
      payload: value,
    };
  };
  export const changeCategoryValueAction = (value) => {
    return {
      type: CATEGORY_VALUE_CHANGED,
      payload: value,
    };
  };
  
  export const getCartProductsAction = (products) => {
    return {
      type: CART_PRODUCT_UPDATED,
      payload: products,
    };
  };
  