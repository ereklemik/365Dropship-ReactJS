import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import NavList from "../../Pages/Homepage/NavList";
import "./dialog.css";
const Login = ({ handleClickOpen, handleClose, open }) => {
  const styled = {
    color: "#fff",
    background: "#61D5DF",
  };

  console.log(open);

  return (
    <div className={"LoginButton"}>
      <Button variant="outlined" style={styled} onClick={handleClickOpen}>
        SING UP NOw
      </Button>
    </div>
  );
};

export default Login;
