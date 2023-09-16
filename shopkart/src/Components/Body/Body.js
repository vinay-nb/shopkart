import React from "react";
import "./Body.css";

function Body() {
  return (
    <>
      <div className="main-container">
        <div className="right-photo">
          <div className="yellow-banner">
            <img src="rect.png" alt="rectangle" />
          </div>
          <div className="star-img">
            <img src="Star 3.png" alt="start" className="star-3" />
          </div>
          <div className="jacket-img-container">
            <img src="jacket.png" alt="oregon jacket" className="jacket-img" />
          </div>
          <div className="fresh-container">
            <img src="fresh.png" alt="fresh" className="fresh-img" />
          </div>
          <div className="year-container">
            <img src="2022.png" alt="year" className="year-img" />
          </div>
          <div className="look-container">
            <img src="look.png" alt="look" className="look-img" />
          </div>
          <div className="banner-line-container">
            <img src="banner-line.png" alt="look" className="banner-img" />
          </div>
          <div className="star4-container">
            <img src="Star 4.png" alt="star" className="star4-img" />
          </div>
          <div className="text-jacket">
            <span className="oregon-jacket">Oregon jacket</span>
            <br />
            <span className="jacket-price">$124</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
