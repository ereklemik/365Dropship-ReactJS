import "./homepage.css";
import Nav from "./Nav";
import Wrapper from "./Wrapper";
import Login from "../../Components/Authorization/Login";
import React from "react";
import { useState } from "react";
import { Switch, Route, Router, Link } from "react-router-dom";
const Home = () => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  document.title = "Home";

  return (
    <div className={"homepage"}>
      <Nav
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <Wrapper />
      <Login
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Home;
