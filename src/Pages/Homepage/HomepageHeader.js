import "./homepageHeader.css";

import { useHistory } from "react-router-dom";
const HomepageHeader = () => {
  const history = useHistory();
  const toLogin = () => {
    history.push("/signin");
  };
  const tocatalog = () => {
    history.push("/signup");
  };
  return (
    <div className="homepage__header">
      <div>
        <img
          className="homepage__logo"
          src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/group-30.png"
        ></img>
      </div>
      <div>
        <ul className="homepage__list">
          <li className="homepage__item homepage__item--resp">ABOUT</li>
          <li className="homepage__item homepage__item--resp">CATALOG</li>
          <li className="homepage__item homepage__item--resp">PRICING</li>
          <li className="homepage__item homepage__item--resp">SUPPLIERS</li>
          <li className="homepage__item homepage__item--resp">HELP CENTER</li>
          <li className="homepage__item homepage__item--resp">BLOG</li>
          <li onClick={tocatalog} className="homepage__item homepage__item--border">SIGN UP NOW</li>
          <li onClick={toLogin} className="homepage__item homepage__item--border">
            LOGIN
          </li>
          
        </ul>
      </div>
    </div>
  );
};
export default HomepageHeader;
