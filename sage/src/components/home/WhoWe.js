import React from 'react';
import './WhoWe.css';

const WhoWe = () => {
  return (
    <div
      className="who-we-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/secbg2.png'})`,
      }}
    >
      <div className="who-we-left">
        <h1>
          <span className="highlight">WHO </span> <br />
          we <br />
          are
        </h1>
      </div>
      <div className="who-we-right">
        <div className="who-we-image-container">
          <img src="sec3img.png" alt="About Sage" />
          
        </div>

        <div>
        <img className="logosec" src='sec2.png' alt='logo'/>
        </div>
        
      </div>
      <div>
      <p className="who-we-description">
          At Sage, we believe that every brand holds the power to inspire, captivate, and resonate, no matter the size of your operation. Since our inception in 2021, we’ve dedicated ourselves to unlocking this potential for small businesses across various sectors. We pride ourselves on fusing creativity and strategy, crafting distinct brand identities that not only stand out but also stand for something meaningful.
        </p>
      </div>
    </div>
  );
};

export default WhoWe;
