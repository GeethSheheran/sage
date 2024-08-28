import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div
      className="footer-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/footer.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="footer-section footer-left">
        <ul className="footer-nav">
          <li>HOME</li>
          <li>OUR STRENGTH</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>BLOG</li>
          <li>CONTACT</li>
          <li>PRIVACY POLICY</li>
        </ul>
      </div>
      <div className="footer-section footer-center">
        <img src={`${process.env.PUBLIC_URL}/footerLogo.png`} alt="Sage Logo" className="footer-logo" />
        <div className="footer-social">
          <img src={`${process.env.PUBLIC_URL}/fb.png`} alt="Facebook" />
          <img src={`${process.env.PUBLIC_URL}/insta.png`} alt="Instagram" />
          <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" />
          <img src={`${process.env.PUBLIC_URL}/x.png`} alt="X (Twitter)" />
        </div>
        <p>© 2024 Sage Media & Design LLC<br />All Rights Reserved</p>
      </div>
      <div className="footer-section footer-right">
        <div className='right-flex'>
        <p>
            Let Sage Media & Design help you elevate your brand and position your business to become a local legend.
            Let Sage bring your vision to life through impactful design and targeted marketing. The future of your
            brand is here.
          </p>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <img src={`${process.env.PUBLIC_URL}/location.png`} alt="Location Icon" />
              <p>908 Broadway, San Francisco, CA 94133</p>
            </div>
            <div className="footer-contact-item">
              <img src={`${process.env.PUBLIC_URL}/mobile.png`} alt="Phone Icon" />
              <p>01 (650) 658 6822</p>
            </div>
            <div className="footer-contact-item">
              <img src={`${process.env.PUBLIC_URL}/mail.png`} alt="Email Icon" />
              <p>contact@sagemedia.com</p>
            </div>
          </div>
        </div>
        <div className="footer-newsletter">
          <input type="email" placeholder="Your email here" />
          <button>SUBSCRIBE!</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
