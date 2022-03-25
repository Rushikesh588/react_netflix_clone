import React from "react";
import "../css/home.css";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  return (
    <>
      <header className="home">
        <div className="home__top">
          <img src={logo} alt="netflix logo" />

          <Button
            className="home__btn"
            onClick={() => history.push("/login")}
            variant="contained"
            color="secondary"
          >
            Sign In
          </Button>
        </div>

        <div className="home__content">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="home__inp">
            <input type="email" placeholder="Email address" />
            <Button
              onClick={() => history.push("/login")}
              variant="contained"
              color="secondary"
              style={{
                fontSize: "1.625rem",
                padding: "8px 1rem",
                backgroundColor: "crimson",
              }}
            >
              Get Started <ArrowForwardIosIcon />
            </Button>
          </div>
        </div>
      </header>
      <div className="home--fade" />
    </>
  );
}

export default Home;
