import { combineReducers } from "redux";
import productReducer from "./ProductReducer";

const combinedReducer = combineReducers({
  product: productReducer,

});

export default combinedReducer;
