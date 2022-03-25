import React, { useState } from "react";
import "../css/signin.css";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import Checkbox from "@material-ui/core/Checkbox";
import { auth } from "../firebase";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/main");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/main");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signIn">
      <div className="login__img">
        <NavLink exact to="/">
          <img src={logo} className="logo" alt="" />
        </NavLink>
      </div>
      <div className="login">
        <div className="login__container">
          <h1>Sign In</h1>
          <form>
            <input
              placeholder="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Password"
              type="passward"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login__button1" type="submit" onClick={signIn}>
              Sign In
            </button>

            <button className="login__button" onClick={register}>
              Create Account
            </button>
          </form>

          <div className="login__bottom">
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
            <p className="login__a">Remember me</p>
            <p>Need help?</p>
          </div>

          <p className="login__new">
            New to Netflix?
            <span className="new">Click on Create Account.</span>
          </p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.<spna className="top"> Learn more.</spna>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
