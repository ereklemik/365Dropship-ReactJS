import {
    CART_PRODUCT_UPDATED,
    CATEGORY_VALUE_CHANGED,
    PRODUCT_UPDATED,
    SEARCH_TYPE_CHANGED,
    SORT_TYPE_CHANGED,
  } from "../ActionTypes/ActionTypes";
  
  const initialState = {
    productsList: [],
    sortType: "",
    searchInput: "",
    categoryValue: " default",
    cartProducts: {},
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case PRODUCT_UPDATED:
        return {
          ...state,
          productsList: action.payload,
        };
      case SORT_TYPE_CHANGED:
        return {
          ...state,
          sortType: action.payload,
        };
      case SEARCH_TYPE_CHANGED:
        return {
          ...state,
          searchInput: action.payload,
        };
      case CATEGORY_VALUE_CHANGED:
        return {
          ...state,
          categoryValue: action.payload,
        };
      case CART_PRODUCT_UPDATED:
        return {
          ...state,
          cartProducts: action.payload,
        };
      default:
        return state;
    }
  };
  export default productsReducer;
  