import React, { useEffect } from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Common from "./components/Common";
import img2 from "./images/img2.png";
import mobile from "./images/mobile.jpg";
import img3 from "./images/img3.png";
import Next from "./components/Next";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispath] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispath({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        dispath({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
            <Common
              name="Enjoy on your TV."
              subName="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
              imgsrc={img2}
            />
            <Next
              name="Download your shows to watch offline."
              subName="Save your favourites easily and always have something to watch."
              imgsrc={mobile}
            />
            <Common
              name="Watch everywhere."
              subName="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
              imgsrc={img3}
            />
            <Footer />
          </Route>

          <Route exact path="/login">
            <SignIn />
            <Footer />
          </Route>

          <Route exact path="/main">
            <Navbar />
            <Banner />
            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row
              title="Romance Movies"
              fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
