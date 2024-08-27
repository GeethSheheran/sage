import React from 'react';
import Hero from '../../components/home/hero';
import WhoWe from '../../components/home/WhoWe';
import WhatWe from '../../components/home/WhatWe';
import Branding from '../../components/home/Branding';
import Partner from '../../components/home/Partner';
import Advice from '../../components/home/Advice';
import Legendary from '../../components/home/Legendary';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <WhoWe />
      <WhatWe />
      <Branding />
      <Partner />
      <Advice />
      <Legendary />
    </div>
  );
};

export default Home;
