import { useHistory } from "react-router-dom";

export const SignOut = () => {
  const history = useHistory();

  const SignOutProcess = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <div>
      <input
        type="button"
        value="Log Out"
        onClick={SignOutProcess}
        className="SignOut"
      />
    </div>
  );
};

export default SignOut;