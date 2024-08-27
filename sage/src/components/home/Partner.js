import React from 'react';
import './Partner.css';

const Partner = () => {
  return (
    <div className="partner-container">
      <h2>OUR <span className="highlight">partners</span></h2>
      <div className="partner-slider">
        <div className="partner-track">
          <img src="/logo1.png" alt="Partner 1" className="partner-logo" />
          <img src="/logo2.png" alt="Partner 2" className="partner-logo" />
          <img src="/logo3.png" alt="Partner 3" className="partner-logo" />
          <img src="/logo4.png" alt="Partner 4" className="partner-logo" />
          <img src="/logo5.png" alt="Partner 5" className="partner-logo" />
          <img src="/logo6.png" alt="Partner 6" className="partner-logo" />
          
        </div>
      </div>
    </div>
  );
};

export default Partner;
