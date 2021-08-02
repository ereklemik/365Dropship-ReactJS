import {
  GET_PRODUCTS,
  CART_PRODUCT_UPDATED,
  PRODUCT_UPDATED,
  SEARCH_PRODUCTS,
  SORT_PRODUCTS,

} from "../ActionTypes/ActionTypes";



const initialState = {
  products: [],
  allProducts: [],
  productsList: [],
  searchedProducts: [],
 
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


const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.productData,
        allProducts: action.payload.productData,
        isLoading: false,
      };

    case PRODUCT_UPDATED:
      return {
        ...state,
        productsList: action.payload,
      };
      case SEARCH_PRODUCTS:
        return {
          ...state,
          products: searchProducts(action.payload.searchValue, [
            ...state.allProducts,
          ]),
        };

        case SORT_PRODUCTS:
      return {
        ...state,
        products: sortProducts(action.payload.sortBy, [...state.products]),
        allProducts: sortProducts(action.payload.sortBy, [
          ...state.allProducts,
        ]),
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
