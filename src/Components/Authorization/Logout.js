import { useHistory } from "react-router-dom";
import "./logout.css";
export const Logout = () => {
  const history = useHistory();

  const performlogut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <div>
      <input
        type="button"
        value="Log Out"
        onClick={performlogut}
        className="logout"
      />
    </div>
  );
};

export default Logout;
