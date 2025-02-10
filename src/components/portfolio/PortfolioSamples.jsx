import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import sonyImage from '../../assets/carousel/SonyXCI-NPR.png';
import hondaImage from '../../assets/carousel/HondaRoadsync.png';
import webexImage from '../../assets/carousel/WebexByNTT.png';
import hospitalityImage from '../../assets/carousel/HospitalityTracker.png';

const PortfolioSamples = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section id="portfolio" className="self-stretch" style={{ paddingTop: '60px', paddingBottom: '120px' }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-[60px]">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold">Portfolio sample</h2>
          <p className="text-gray-600">
            Collaborating with leading global companies and building strong alliances within various B2B industries.
          </p>
        </div>

        <div className="relative mt-6 -mx-4 md:-mx-[60px]">
          <div className="flex gap-6 px-4 md:px-[60px]">
            {samples.map((sample, index) => (
              <div
                key={sample.title}
                className="flex-shrink-0 flex flex-col w-[370px] min-w-[370px] h-[524px] rounded-xl bg-white transition-all duration-300"
                style={{
                  transform: `translateX(-${currentIndex * 396}px)`,
                  boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.25)'
                }}
              >
                <div className="relative w-full h-[320px] rounded-t-xl overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(to right bottom, #F5DD50 60%, #FEEF94)' }}>
                  <img 
                    src={sample.image} 
                    alt={sample.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col p-6 w-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{sample.title}</h3>
                    <span className="px-3 py-1 bg-[#F5DD50] bg-opacity-30 rounded-full text-sm">
                      {sample.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{sample.description}</p>
                    <a href={sample.source} className="flex items-center text-gray-900 font-medium">Learn more</a>
                    {/*<ChevronRight className="ml-2 h-4 w-4" />
                  </button>*/}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSamples;