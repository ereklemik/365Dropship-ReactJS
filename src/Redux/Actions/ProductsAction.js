import API from "../../Components/API/API";
import {
  GET_PRODUCTS,
  SORT_PRODUCTS,
  SEARCH_PRODUCTS,
  PRICE_FILTER,
  SELECTED_PRODUCTS,
  PRODUCT_LIST,
} from "../contetnt/actionTypes";

export const getProducts = () => async (dispatch) => {
  const productApi = API("api/v1/products");
  const product = await productApi.get();
  dispatch({
    type: GET_PRODUCTS,
    payload: {
      productData: product.data.data,
    },
  });
};

export const searchProducts = (searchValue) => {
  return {
    type: SEARCH_PRODUCTS,
    payload: {
      searchValue,
    },
  };
};

export const productList = (productListValue) => {
  return {
    type: PRODUCT_LIST,
    payload: {
      productListValue,
    },
  };
};

export const priceFilter = (priceValue) => {
  return {
    type: PRICE_FILTER,
    payload: {
      priceValue,
    },
  };
};

export const selectProducts = (selectValue) => {
  return {
    type: SELECTED_PRODUCTS,
    payload: {
      selectValue,
    },
  };
};

export const sortProducts = (sortValue) => {
  return {
    type: SORT_PRODUCTS,
    payload: {
      sortBy: sortValue,
    },
  };
};
