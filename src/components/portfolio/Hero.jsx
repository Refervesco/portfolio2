// src/components/portfolio/Hero.jsx
import React from 'react';
import leadership from '../../assets/leadership-1.svg';
import expertise from '../../assets/expertise-internationale.svg';
import advisory from '../../assets/advisory-3.svg';

// src/components/portfolio/Hero.jsx
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
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-[60px] py-[60px] flex flex-col min-h-[756px]">
          {/* Title */}
          <h1 
            className="font-roboto text-[48px] font-bold leading-[120%] text-[#111212] text-left mb-8"
            style={{
              width: '850px',
              flexShrink: 0,
            }}
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
              I'm an accomplished trilingual product leader and advisor (<a href="#" className="underline">ENTP-type</a>), <br></br>with 18 years of expertise in crafting tech products that resonates with users.
            </p>
            <p>
              I'm passionate guiding and inspiring teams to deliver innovative, user-centric solutions.
            </p>
          </div>
  
        {/* Three sections with specific width for each column */}
            <div className="grid grid-cols-3 gap-[32px] mb-16">
                {/* Each section is exactly 262px wide */}
                <div className="w-[262px]">
                    <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <img src={leadership} alt="" className="w-10 h-10" />
                    </div>
                    <h2 
                    className="font-roboto text-[32px] font-bold text-[#323232] mb-4"
                    style={{
                        width: '262px',
                        height: '56px',
                        lineHeight: '28px',
                        fontFeatureSettings: '"liga" off, "clig" off'
                    }}
                    >
                    Leadership Produit
                    </h2>
                    <p className="mb-4 font-roboto text-[16px] text-black" style={{ opacity: 0.6 }}>De l'Ingénierie à CPO : 15+ ans d'expertise produit</p>
                    <a href="#" className="text-gray-500">Learn more →</a>
                </div>

                {/* Expertise */}
                <div className="w-[262px]">
                    <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <img src={expertise} alt="" className="w-10 h-10" />
                    </div>
                    <h2 
                    className="font-roboto text-[32px] font-bold text-[#323232] mb-4"
                    style={{
                        width: '262px',
                        height: '56px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        flexShrink: 0,
                        alignSelf: 'stretch',
                        lineHeight: '28px',
                        fontFeatureSettings: '"liga" off, "clig" off'
                    }}
                    >
                    Expertise internationale
                    </h2>
                    <p className="mb-4 font-roboto text-[16px] text-black" style={{ opacity: 0.6 }}>Leadership d'équipes en France et au Japon. Trilingue FR/EN/JP</p>
                    <a href="#" className="text-gray-500">Learn more →</a>
                </div>

                {/* Formation */}
                <div className="w-[262px]">
                    <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <img src={advisory} alt="" className="w-10 h-10" />
                    </div>
                    <h2 
                    className="font-roboto text-[32px] font-bold text-[#323232] mb-4"
                    style={{
                        width: '262px',
                        height: '56px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        flexShrink: 0,
                        alignSelf: 'stretch',
                        lineHeight: '28px',
                        fontFeatureSettings: '"liga" off, "clig" off'
                    }}
                    >
                    Formation & conseil
                    </h2>
                    <p className="mb-4 font-roboto text-[16px] text-black" style={{ opacity: 0.6 }}>Partage d'expertise en stratégie produit et transformation digitale</p>
                    <a href="#" className="text-gray-500">Learn more →</a>
                </div>
            </div>
    
            {/* Buttons */}
            <div className="flex gap-4">
                <button className="px-8 py-3 bg-black text-white rounded">View Portfolio</button>
                <button className="px-8 py-3 border border-black rounded">Contact</button>
            </div>
        </div>
      </div>
    );
  };

export default Hero;