import React from 'react';
import './Legendary.css';

const Legendary = () => {
  return (
    <div className="legendary-container">
      <div className="legendary-left">
        <img src={`${process.env.PUBLIC_URL}/legendary.png`} alt="Legendary Car" className="legendary-image" />
      </div>
      <div className="legendary-right">
        <p className="legendary-description">
          Let Sage bring your vision to life through impactful design and targeted marketing. The future of your brand is here.
        </p>
        <div className="legendary-vertical-rule"></div>
        <div className="legendary-heading-container">
          <h1 className="legendary-heading">
            READY <br />
            <span className="legendary-subheading">to become legendary?</span>
          </h1>
          <div className='btn'>
          <button className="legendary-button">Start your Journey!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legendary;
