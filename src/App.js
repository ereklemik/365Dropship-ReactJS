import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Homepage from "./Pages/Homepage/Homepage";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import Inventory from "./Pages/Inventory";
import Transactions from "./Pages/Transactions";
import Store from "./Pages/Store";
import AddProduct from "./Pages/AddProduct";
function App() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartProduct, setCartProducts] = useState([]);

  const sellectAllProducts = () => {
    setSelectedProducts(products.map((product) => product.id));
  };
  const unselectAll = () => {
    setSelectedProducts([]);
  };
  const token = localStorage.getItem("token");

  return (
    <Router>
      {token && <Sidebar />}
      <Switch>
        <Route exact path="/">
          <Redirect to="/" />
          <Homepage />
        </Route>
        <Route path={"/Profile"}>
          <Profile />
        </Route>
        <Route path={"/DASHBOARD"}>
          <Dashboard />
        </Route>
        <Route path={"/Inventory"}>
          <Inventory
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        </Route>
        <Route path={"/SHOPPING"}>
          <Cart />
        </Route>
        <Route path={"/ORDERS"}>
          <Orders />
        </Route>
        <Route path={"/addProduct/:productId?"}>
          <AddProduct />
        </Route>
        <Route path={"/TRANSACTION"}>
          <Transactions />
        </Route>
        <Route path={"/STORE"}>
          <Store />
        </Route>
        <Route path={"/catalog"}>
          <div className="content">
            <Aside products={products} setProducts={setProducts} />
            <Header
              products={products}
              setProducts={setProducts}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              selectedProducts={selectedProducts}
              sellectAllProducts={sellectAllProducts}
              unselectAll={unselectAll}
            />
            <Main
              products={products}
              setProducts={setProducts}
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
              cartProduct={cartProduct}
              setCartProducts={setCartProducts}

            />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
