import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="second-header">
        <div className="left-second-header">
          <div className="logo">
            <span>ShopKart</span>
          </div>
        </div>
        <div className="right-second-header">
          <div className="right-menu">
            <span>WISHLIST (0)</span>
            <span>BAG (0)</span>
          </div>
        </div>
      </div>
      <img src="headerbottom.png" alt="border-bottom" className="bottom-line" />
      <div className="sub-menu">
        <div className="main-menu">
          <span>HOME</span>
          <span>ABOUT</span>
          <span>OUR Products</span>
          {/* <ul>
              <li>Proudct 1</li>
              <li>Proudct 2</li>
              <li>Proudct 3</li>
              <li>Proudct 4</li>
            </ul> */}
          <span>CONTACT US</span>
        </div>
      </div>
    </>
  );
}

export default Header;
