// src/components/portfolio/PortfolioMain.jsx
import React from 'react';
import TopMenu from './TopMenu';
import Hero from './Hero';
import Companies from './Companies';

const Portfolio = () => {
  return (
    <div className="bg-[#F5DD50]">
      <TopMenu />
      <Hero />
      <Companies />
    </div>
  );
};

export default Portfolio;