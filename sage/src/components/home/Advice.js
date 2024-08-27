import React from 'react';
import './Advice.css';

const Advice = () => {
  return (
    <div className="advice-container">
      <div className="advice-header">
        <img src={`${process.env.PUBLIC_URL}/advice.png`} alt="Sage Advice Header" className="header-image" />
      </div>
      <div className="advice-content">
        <div className="advice-article">
          <div className="advice-article-header">
            <h3>From Small to Memorable: Why Every Local Business Needs a Distinct Brand Voice</h3>
            <p className="advice-date">October 4, 2023</p>
          </div>
          <p className="advice-description">
            Unlock the power of a distinct brand voice to make your local business unforgettable. Dive into Sage's insights on why brand strategy and brand voice are vital for long-term success. Stand out and make an impact in your community.
          </p>
          <button className="read-more-button">Read more</button>
        </div>
        <div className="advice-article">
          <div className="advice-article-header">
            <h3>From Small to Memorable: Why Every Local Business Needs a Distinct Brand Voice</h3>
            <p className="advice-date">October 4, 2023</p>
          </div>
          <p className="advice-description">
            Unlock the power of a distinct brand voice to make your local business unforgettable. Dive into Sage's insights on why brand strategy and brand voice are vital for long-term success. Stand out and make an impact in your community.
          </p>
          <button className="read-more-button">Read more</button>
        </div>
        <div className="advice-article">
          <div className="advice-article-header">
            <h3>From Small to Memorable: Why Every Local Business Needs a Distinct Brand Voice</h3>
            <p className="advice-date">October 4, 2023</p>
          </div>
          <p className="advice-description">
            Unlock the power of a distinct brand voice to make your local business unforgettable. Dive into Sage's insights on why brand strategy and brand voice are vital for long-term success. Stand out and make an impact in your community.
          </p>
          <button className="read-more-button">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Advice;
