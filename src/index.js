import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import productsReducer from "./Redux/Products/ProductsReducer";
import modalReducer from "./Redux/Modal/ModalReducer";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const reducers = combineReducers({
  products: productsReducer,
  modal: modalReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={5}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </Provider>,

  document.getElementById("root")
);
