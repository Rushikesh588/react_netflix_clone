import React from "react";
import "../css/next.css";
import boxshot from "../images/boxshot.png";
import CircularProgress from "@material-ui/core/CircularProgress";

function Next({ name, subName, imgsrc }) {
  return (
    <>
      <div className="next">
        <div className="next__show">
          <div className="next__content">
            <div>
              <div>
                <img className="next__img" src={imgsrc} />
                <div className="next__main">
                  <img src={boxshot} />
                  <p>
                    Stranger Things <br />
                    <span>Downloading...</span>
                  </p>
                  <CircularProgress
                    style={{
                      marginLeft: "2rem",
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <h1>{name}</h1>
              <h4>{subName}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="next--fade" />
    </>
  );
}

export default Next;
