import dashboard from "./assets/dashboard.svg";
import cart from "./assets/cart.svg";
import catalog from "./assets/catalog.svg";
import inventory from "./assets/inventory.svg";
import orders from "./assets/orders.svg";
import transactions from "./assets/transactions.svg";
import storesList from "./assets/storesList.svg";
import profile from "./assets/profile.jpg";
import dropship_logo from "./assets/dropship_logo.png";
import Aside from "../Aside/Aside";
import "./sidebar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={"nav"}>
      <nav className={"nav__container"}>
        <div>
        <Link to={"/Dashboard"}>
          <img src={dropship_logo} className={"dropshipLogo"} alt={"logo"} />
          </Link>
          <div className={"nav__list"}>
            <div className={"nav__items"}>
              <Link to={"/Profile"}>
                <img src={profile} className={"profile"} />
              </Link>
              <Link to={"/Dashboard"}>
                <img src={dashboard} />
              </Link>
              <Link to={"/Catalog"}>
                <img src={catalog} />
              </Link>
              <Link to={"/Invnetory"}>
                <img src={inventory} />
              </Link>
              <Link to={"/Cart"}>
                <img src={cart} />
              </Link>
              <Link to={"/Orders"}>
                <img src={orders} />
              </Link>
              <Link to={"/Transactions"}>
                <img src={transactions} />
              </Link>
              <Link to={"/Store"}>
                <img src={storesList} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
