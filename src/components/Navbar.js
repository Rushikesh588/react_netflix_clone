import React, { useEffect, useState } from "react";
import "../css/navbar.css";
import logo from "../images/logo.png";
import { NavLink, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
import Button from "@material-ui/core/Button";

function Navbar() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const [{ user }, dispath] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      history.push("/");
    } else {
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <NavLink exact to="/">
        <img className="nav__logo" src={logo} alt="netflix logo" />
      </NavLink>

      <div className="nav__btn" onClick={handleAuthentication}>
        <Button
          onClick={() => history.push("/")}
          variant="contained"
          color="secondary"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
