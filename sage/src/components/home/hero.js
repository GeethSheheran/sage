import React from 'react';
import './hero.css';

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
        <div className="hero-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/our-strength">Our Strength</a></li>
            <li><a href="/why-we">Why we?</a></li>
            <li><a href="/blog">Our Blog</a></li>
            <li><a href="/contact">Call us</a></li>
          </ul>
          <div className="hero-contact">
            <a href="tel:016506586822">01 (650) 658 6822</a>
          </div>
        </div>
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
