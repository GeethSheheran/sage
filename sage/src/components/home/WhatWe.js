import React from 'react';
import './WhatWe.css';

const WhatWe = () => {
  return (
    <div className="what-we-container">
      <div className="what-we-left">
        <div className="what-we-left-text">
          <span className="vertical-text">WHAT WE DO @ SAGE MEDIA</span>
        </div>
        <div className="what-we-image-container">
          <img src="/Group 9.png" alt="What We Do" />
          <div className="play-button">
            {/* <span>&#9658;</span>  Play button symbol */}
          </div>
          <p className="play-text">PRESS PLAY TO TAKE A TOUR</p>
        </div>
      </div>
      <div className="what-we-right">
        <img src="/wedo.png" alt="What We Do Right Side" className="what-we-right-image" />
        <p className="what-we-description">
          We turn your vision into a brand that not only stands out but thrives. Starting with an insightful brand interview, we craft a strategy that ensures you're unforgettable in both digital and physical spaces. We're not just creating logos and websites; we're building brand experiences that captivate and convert, helping your business grow in a crowded market.
        </p>
        <button className="reach-us-button">Reach Us</button>
      </div>
    </div>
  );
};

export default WhatWe;
