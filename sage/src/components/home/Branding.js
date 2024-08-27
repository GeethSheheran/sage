import React from 'react';
import './Branding.css';

const Branding = () => {
  return (
    <div className="branding-container">
      <div
        className="branding-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/branding.png'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          width: '100%',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/branding-text-overlay.png`}
          alt="Branding Text Overlay"
          style={{
            position: 'absolute',
            maxWidth: '100%',
            height: 'auto',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      <div className="branding-services">
        <div className="service">
          <h2>Assess & Strategize</h2>
          <p>
            We start with a thorough brand audit and in-depth interview to fully
            understand your vision. Based on these insights, we formulate a
            customized brand strategy tailored for your success.
          </p>
        </div>
        <div className="service">
          <h2>Design & Implement</h2>
          <p>
            We turn your vision into reality with our suite of design services.
            From unique & eye-catching logos to comprehensive branding guides,
            brand collateral (business cards, letterheads, etc.) and dynamic
            websites, we create assets that resonate.
          </p>
        </div>
        <div className="service">
          <h2>Attract & Convert</h2>
          <p>
            Our digital marketing expertise takes your new brand to the next
            level. Utilizing proven strategies in PPC, social media, email
            marketing, and SEO, we help you capture attention and convert leads.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Branding;
