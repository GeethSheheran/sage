import React from 'react';
import Hero from '../../components/home/hero';
import WhoWe from '../../components/home/WhoWe';
import WhatWe from '../../components/home/WhatWe';
import Branding from '../../components/home/Branding';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <WhoWe />
      <WhatWe />
      <Branding />
    </div>
  );
};

export default Home;
