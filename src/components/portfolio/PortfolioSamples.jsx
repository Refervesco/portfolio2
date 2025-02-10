import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import sonyImage from '../../assets/carousel/SonyXCI-NPR.png';
import hondaImage from '../../assets/carousel/HondaRoadsync.png';
import webexImage from '../../assets/carousel/WebexByNTT.png';
import hospitalityImage from '../../assets/carousel/HospitalityTracker.png';

const PortfolioSamples = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(370);

  // Update card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      const screenWidth = window.innerWidth;
      const padding = screenWidth >= 768 ? 120 : 32; // 60px * 2 for md, 16px * 2 for mobile
      const newWidth = Math.min(370, screenWidth - padding);
      setCardWidth(newWidth);
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const samples = [
    {
      title: 'Webex by NTT',
      category: 'Conferencing',
      image: webexImage,
      description: 'Webex by NTT is a Software as a Service and Cloud Conferencing product for the Unified Communications industry.',
      source: 'https://www.refervesco.com/portfolio-webex.php'
    },
    {
      title: 'Honda Roadsync',
      category: 'Mobility',
      image: hondaImage,
      description: 'Crafted the next generation of connected mobility for Honda. Designing, building & running B2C apps, IoT and SaaS for Honda.',
      source: 'https://www.refervesco.com/portfolio-drivemode.php'
    },
    {
      title: 'Sony XCI-NPR',
      category: 'Semiconductors',
      image: sonyImage,
      description: 'The Sony XCI-NPR is a B2B highly integrated AI camera system, designed for Access Control applications.',
      source: 'https://www.refervesco.com/portfolio-sony.php'
    },
    {
      title: 'Hospitality Tracker',
      category: 'Web SaaS',
      image: hospitalityImage,
      description: 'The d-edge hospitality tracker showcase the room booking trends of the hospitality sector in europe.',
      source: 'https://www.refervesco.com/portfolio-sony.php'
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? samples.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === samples.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="w-full pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold">Portfolio sample</h2>
          <p className="text-gray-600">
            Here is a selection of products I have worked on. This list is not exhaustive, more will be added soon.
          </p>
        </div>

        <div className="relative mt-6 overflow-hidden">
          <div className="flex gap-6 py-4">
            {samples.map((sample, index) => (
              <div
                key={sample.title}
                className="flex-shrink-0 flex flex-col rounded-xl bg-white transition-all duration-300 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
                style={{
                  width: `${cardWidth}px`,
                  transform: `translateX(-${currentIndex * (cardWidth + 24)}px)` // 24px is the gap
                }}
              >
                <div 
                  className="relative w-full rounded-t-xl overflow-hidden flex items-center justify-center"
                  style={{ 
                    height: `${Math.min(320, cardWidth * 0.86)}px`,
                    background: 'linear-gradient(to right bottom, #F5DD50 60%, #FEEF94)'
                  }}
                >
                  <img 
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col p-4 md:p-6 w-full">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold truncate">{sample.title}</h3>
                    <span className="flex-shrink-0 px-3 py-1 bg-[#F5DD50] bg-opacity-30 rounded-full text-xs md:text-sm">
                      {sample.category}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{sample.description}</p>
                  <a href={sample.source} className="flex items-center text-gray-900 font-medium text-sm md:text-base">
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSamples;