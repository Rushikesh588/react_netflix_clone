import React from "react";
import "../css/common.css";

function Common({ name, subName, imgsrc }) {
  return (
    <>
      <div className="common">
        <div className="common__show">
          <div className="common__content">
            <div>
              <h1>{name}</h1>
              <h4>{subName}</h4>
            </div>
            <img className="common__img" src={imgsrc} />
          </div>
        </div>
      </div>
      <div className="common--fade" />
    </>
  );
}

export default Common;
