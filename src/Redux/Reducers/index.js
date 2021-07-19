import { combineReducers } from "redux";
import productReducer from "./ProductsReducer";

const combinedReducer = combineReducers({
  product: productReducer,
});

export default combinedReducer;
