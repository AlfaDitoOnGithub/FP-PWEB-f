import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" width={120} />
          <span className="secondaryText">
          Lorem ipsum dolor sit amet, <br/> 
ed do eiusmod tempor 
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Informasi</span>
          <span className="secondaryText">Keputih, ITS, Surabaya</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
