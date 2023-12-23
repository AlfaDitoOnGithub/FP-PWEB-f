import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Ayo Sewa Kamarmu</span>
          <span className="secondaryText">
          Exercitation in fugiat est ut ad ea cupidatat ut in 
            <br />
            cupidatat occaecat ut occaecat.
          </span>
          <button className="button" href>
            <a href="mailto:widianogik@gmail.com">Mulai</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
