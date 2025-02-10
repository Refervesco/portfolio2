import React from 'react';
import leadership from '../../assets/leadership-1.svg';
import expertise from '../../assets/expertise-internationale.svg';
import advisory from '../../assets/advisory-3.svg';

const Hero = () => {
    return (
      <div className="w-full min-h-[756px] bg-[#F5DD50] relative">
        {/* Gradient remains the same */}
        <div className="absolute bottom-0 right-0 pointer-events-none z-0" 
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle at bottom right, #FEEF94 0%, #F5DD50 70%)',
            opacity: '0.8'
          }}
        />
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-[60px] py-[60px] flex flex-col min-h-[756px]">
          {/* Title - Made responsive */}
          <h1 
            className="font-roboto text-[32px] md:text-[48px] font-bold leading-[120%] text-[#111212] text-left mb-8 max-w-full md:max-w-[850px]"
          >
            Product Leadership & Innovation
          </h1>
          
          {/* Text section */}
          <div 
            className="font-roboto text-[20px] leading-[100%] text-black mb-16"
            style={{ opacity: 0.6 }}
          >
            <p>Hi, I'm Maxime!</p>
            <p>
              I'm an accomplished trilingual product leader and advisor (<a href="#" className="underline">ENTP-type</a>), <br className="hidden md:block" />with 18 years of expertise in crafting tech products that resonates with users.
            </p>
            <p>
              I'm passionate guiding and inspiring teams to deliver innovative, user-centric solutions.
            </p>
          </div>
  
          {/* Three sections - Made responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[32px] mb-16">
            {/* Each section - Width adjusts for mobile */}
            <div className="w-full md:w-[262px]">
                <h2 
                  className="font-roboto text-[24px] md:text-[32px] font-bold text-[#323232] mb-4 leading-tight"
                >
                  Leadership Produit
                </h2>
                <p className="mb-4 font-roboto text-[16px] text-black" style={{ opacity: 0.6 }}>
                  De l'Ingénierie à CPO : 15+ ans d'expertise produit
                </p>
                <a href="#" className="text-gray-500">Learn more →</a>
            </div>

            {/* Expertise */}
            <div className="w-full md:w-[262px]">
                <h2 
                  className="font-roboto text-[24px] md:text-[32px] font-bold text-[#323232] mb-4 leading-tight"
                >
                  Expertise internationale
                </h2>
                <p className="mb-4 font-roboto text-[16px] text-black" style={{ opacity: 0.6 }}>
                  Leadership d'équipes en France et au Japon. Trilingue FR/EN/JP
                </p>
                <a href="#" className="text-gray-500">Learn more →</a>
            </div>

            {/* Formation */}
            <div className="w-full md:w-[262px]">
                <h2 
                  className="font-roboto text-[24px] md:text-[32px] font-bold text-[#323232] mb-4 leading-tight"
                >
                  Formation & conseil
                </h2>
                <p className="mb-4 font-roboto text-[16px] text-black" style={{ opacity: 0.6 }}>
                  Partage d'expertise en stratégie produit et transformation digitale
                </p>
                <a href="#" className="text-gray-500">Learn more →</a>
            </div>
          </div>
    
          {/* Buttons - Made responsive */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#portfolio" className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded text-center">View Portfolio</a>
            <a href="https://www.linkedin.com/in/maxime-vonthron" className="w-full sm:w-auto px-8 py-3 border border-black rounded">Contact</a>
          </div>
        </div>
      </div>
    );
};

export default Hero;