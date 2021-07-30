import API from "../Reducers/API";
import {
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
  SELECT_PRODUCT,
  SORT_PRODUCTS,
} from "./actionTypes";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  const productApi = API("api/v1/products");
  const product = await productApi.get();

  dispatch({
    type: GET_PRODUCTS,
    payload: {
      productData: product.data.data,
    },
  });
};

export const sortProducts = (sortValue) => {
  return {
    type: SORT_PRODUCTS,
    payload: {
      sortBy: sortValue,
    },
  };
};

export const searchProducts = (searchValue) => {
  return {
    type: SEARCH_PRODUCTS,
    payload: {
      searchValue,
    },
  };
};

export const selectProduct = (filtered) => {
  return {
    type: SELECT_PRODUCT,
    payload: {
      selectedProducts: filtered,
    },
  };
};

export const filterProducts = (filter) => {
  return {
    type: FILTER_PRODUCTS,
    payload: {
      filter,
    },
  };
};
