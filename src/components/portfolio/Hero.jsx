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
              I'm an accomplished transformational product leader and advisor (<a href="https://www.truity.com/blog/personality-type/entp" className="underline">ENTP-type</a>), <br className="hidden md:block" />with 18 years of experience in crafting tech products that resonates with users.
            </p>
            <p>
              Advocating for servant leadership, I'm passionate guiding and inspiring teams <br className="hidden md:block" />to deliver innovative, user-centric solutions.
            </p>
          </div>
  
          {/* Three sections - Made responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[32px] mb-16">
            {/* Each section - Width adjusts for mobile */}
            <div className="w-full md:w-[262px]">
                <h2 
                  className="font-roboto text-[24px] md:text-[32px] font-bold text-[#323232] mb-4 leading-tight"
                >
                  Product Leadership
                </h2>
                <p className="mb-4 font-roboto text-[16px] text-black" style={{ opacity: 0.6 }}>
                  From Engineering to CPO: 15+ years of product expertise spanning from Product Vision & Strategy, Roadmapping, Discovery & Delivery, UX Design, and full stack engineering including Generative AI.
                </p>
                {/*<a href="#" className="text-gray-500">Learn more →</a>*/}
            </div>
            

            {/* Expertise */}
            <div className="w-full md:w-[262px]">
                <h2 
                  className="font-roboto text-[24px] md:text-[32px] font-bold text-[#323232] mb-4 leading-tight"
                >
                  International Expertise
                </h2>
                <p className="mb-4 font-roboto text-[16px] text-black" style={{ opacity: 0.6 }}>
                  Team leadership in France and Japan. Trilingual FR/EN/JP. Having lived in numerous countries, let's have a coffee to talk about why Peter Drucker said <i>Culture eats strategy for breakfast</i>.
                </p>
                {/*<a href="#" className="text-gray-500">Learn more →</a> -->*/}
            </div>

            {/* Formation */}
            <div className="w-full md:w-[262px]">
                <h2 
                  className="font-roboto text-[24px] md:text-[32px] font-bold text-[#323232] mb-4 leading-tight"
                >
                  Advisory & Education
                </h2>
                <p className="mb-4 font-roboto text-[16px] text-black" style={{ opacity: 0.6 }}>
                  Sharing expertise in product strategy and digital transformation. This is an area that I'm currently developing, feel free to reach out.
                </p>
                {/*<a href="#" className="text-gray-500">Learn more →</a>*/}
            </div>
          </div>
    
          {/* Buttons - Made responsive */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#portfolio" className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded text-center">View Portfolio</a>
            <a href="https://www.linkedin.com/in/maxime-vonthron" className="w-full sm:w-auto px-8 py-3 border border-black rounded text-center">Contact</a>
          </div>
        </div>
      </div>
    );
};

export default Hero;