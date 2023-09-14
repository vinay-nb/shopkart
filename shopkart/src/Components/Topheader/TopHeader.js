import React from "react";
import "./TopHeader.css";

function TopHeader() {
  return (
    <>
      <div className="header-container">
        <div className="left-menu">
          <img alt="delivery-logo" src="Vector.png" />
          <span> Free Delivery</span>
          <span> | </span>
          <span> Return Policy </span>
        </div>
        <div className="right-heading">
          <div className="right-menu">
            <span>Login</span>
            <span> Follow US</span>
            <img src="facebook.png" alt="facebook" />
            <img src="linkedin.png" alt="linkedin" />
            <img src="twitter.png" alt="twitter" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
