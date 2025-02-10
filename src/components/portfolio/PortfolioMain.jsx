// src/components/portfolio/PortfolioMain.jsx
import React from 'react';
import TopMenu from './TopMenu';
import Hero from './Hero';
import Companies from './Companies';
import PortfolioSamples from './PortfolioSamples';

const Portfolio = () => {
  return (
    <div>
      <TopMenu />
      <Hero />
      <Companies />
      <PortfolioSamples />
    </div>
  );
};

export default Portfolio;