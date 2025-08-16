import React from 'react';
import Hero from '../Hero';
import AppsSlider from '../AppSlider';
import SecuritySection from '../SecuritySection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AppsSlider title="Popularne Aplikacje" />
      <AppsSlider title="Nowości" />
      <SecuritySection />
    </>
  );
};

export default HomePage;