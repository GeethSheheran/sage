import React from 'react';
import Hero from '../../components/home/hero';
import WhoWe from '../../components/home/WhoWe';
import WhatWe from '../../components/home/WhatWe';
import Branding from '../../components/home/Branding';
import Partner from '../../components/home/Partner';
import Advice from '../../components/home/Advice';
import Legendary from '../../components/home/Legendary';
import Footer from '../../components/Footer';
import FadeInSection from '../../components/FadeInSection';

const Home = () => {
  return (
    <div className="home">
      <FadeInSection><Hero /></FadeInSection>
      <FadeInSection><WhoWe /></FadeInSection>
      <FadeInSection><WhatWe /></FadeInSection>
      <FadeInSection><Branding /></FadeInSection>
      <FadeInSection><Partner /></FadeInSection>
      <FadeInSection><Advice /></FadeInSection>
      <FadeInSection><Legendary /></FadeInSection>
      <Footer/>
    </div>
  );
};

export default Home;
