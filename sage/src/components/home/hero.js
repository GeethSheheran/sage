import React from 'react';
import './hero.css';
import NavBar from '../NavBar';

const Hero = () => {
  return (
    <div className="hero-container">
      <div
        className="hero-left"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/bg01.png'})`,
        }}
      >
        <h1 className="highlight2">
          Stand 
      
        </h1>
          <h1><span className="highlight">out</span> </h1>

      </div>
      <div className="hero-right">
        <NavBar />
        <div className="hero-content">
          <p>
            Let Sage Media & Design help you elevate your brand and position your business to become a local legend.
          </p>
          <h1>from the crowd</h1>
          <button className="hero-button">Want to see more?</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
