import "./navlist.css";
import { Button } from "@material-ui/core";
import React from "react";
import Dialog from "./Dialog";
import Login from "../../Components/Authorization/Login";
const Navlist = ({ handleClickOpen, handleClose, open, setOpen }) => {
  const styled = {
    color: "#61D5DF",
    border: "1px solid #61D5DF",
  };

  return (
    <div className={"Navlist"}>
      <ul className={"Nav__Items"}>
        <li className={"Nav__Lists"}>ABOUT</li>
        <li className={"Nav__Lists"}>CATALOG</li>
        <li className={"Nav__Lists"}>PRICING</li>
        <li className={"Nav__Lists"}>SUPPLIERS</li>
        <li className={"Nav__Lists"}>HELP CENTER</li>
        <li className={"Nav__Lists"}>BLOG</li>
        <Login
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
        <Button onClick={handleClickOpen}>LOGIN</Button>
      </ul>
      <Dialog
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Navlist;
