import Button from "../../Components/Header/Button";
import { useHistory } from "react-router-dom";
import "./homepage.css";
import HomepageHeader from "./HomepageHeader";
import HomepageBody from "./HomepageBody";

const Homepage = () => {
  const history = useHistory();

  const tocatalog = () => {
    history.push("/signup");
  };
  return (
    <div className="homepage-container">
      <div className="homepage-main">
        <HomepageHeader />
        <HomepageBody />
        <Button handleClick={tocatalog} signUp title="Sign Up Now" />
      </div>
    </div>
  );
};
export default Homepage;
