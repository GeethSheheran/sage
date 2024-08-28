import React from 'react';
import './navbar.css'; // Or create a separate CSS file for the navbar if needed

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
