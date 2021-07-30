import {
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
  SELECT_PRODUCT,
  SORT_PRODUCTS,
} from "../Actions/ActionTypes";

const initState = {
  products: [],
  allProducts: [],
  searchedProducts: [],
  selectedProducts: [],
  isLoading: true,
};

export const sortProducts = (sort, data) => {
  sort === "asc" && data.sort((a, b) => b.price - a.price);
  sort === "desc" && data.sort((a, b) => a.price - b.price);
  sort === "alpasc" && data.sort((a, b) => (a.title > b.title ? 1 : -1));
  sort === "alpdesc" && data.sort((a, b) => (a.title > b.title ? -1 : 1));
  sort === "def" && data.sort((a, b) => a.id - b.id);
  return data;
};

const searchProducts = (searchValue, data) => {
  return data.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.productData,
        allProducts: action.payload.productData,
        isLoading: false,
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        products: sortProducts(action.payload.sortBy, [...state.products]),
        allProducts: sortProducts(action.payload.sortBy, [
          ...state.allProducts,
        ]),
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: searchProducts(action.payload.searchValue, [
          ...state.allProducts,
        ]),
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProducts: action.payload.selectedProducts,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        products: action.payload.filter,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ProductReducer;
