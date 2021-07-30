import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import combinedReducer from "./Redux/Reducers/Index";
import thunk from "redux-thunk";
import { createTheme, MuiThemeProvider } from "@material-ui/core";

const composeEnchanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combinedReducer,
  composeEnchanser(applyMiddleware(thunk))
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
