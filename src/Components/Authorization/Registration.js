import { useState, useEffect } from "react";
import { registration } from "../../Components/API/API";
import { useHistory } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useHistory();

  const registered = (e) => {
    e.preventDefault();
    registration(
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation
    ).then((res) => {
      loginIn();
    });
  };

  const loginIn = () => {
    const token = localStorage.getItem("token");
    if (token) LoginSucceded();
  };

  const LoginSucceded = () => {
    history.replace("/catalog");
  };
  return (
    <>
      <form className="form" onSubmit={(e) => registered(e)}>
        <p>Sign up</p>
        <div>
          <input
            type="text"
            placeholder="Firstname"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Lastname"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Your Password"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </div>

        <div>
          <input id={"button"} type="Submit" value="Sign Up" />
        </div>
      </form>
    </>
  );
};
export default Registration;
