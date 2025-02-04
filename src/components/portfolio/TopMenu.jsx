import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.svg';
import frflag from '../../assets/fr-round.svg';
import enflag from '../../assets/en-round.svg';
import jaflag from '../../assets/ja-round.svg';

const TopMenu = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageMenuRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="h-20 w-full">
      <div className="w-full mx-auto px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo section */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="A Slice of Cheese" 
              className="w-[190px] h-[33px]"
            />
          </div>
          
          {/* Navigation and Flag section */}
          <div className="flex items-center">
            <nav className="flex gap-8 mr-8">
              <a href="#" className="font-roboto text-[20px] leading-[150%] tracking-[-0.2px] text-black relative group inline-block text-center">
                <span className="block font-normal group-hover:opacity-0 transition-opacity">Home</span>
                <span className="block font-medium absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Home</span>
              </a>
              <a href="#" className="font-roboto text-[20px] leading-[150%] tracking-[-0.2px] text-black relative group inline-block text-center">
                <span className="block font-normal group-hover:opacity-0 transition-opacity">Portfolio</span>
                <span className="block font-medium absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Portfolio</span>
              </a>
              <a href="#" className="font-roboto text-[20px] leading-[150%] tracking-[-0.2px] text-black relative group inline-block text-center">
                <span className="block font-normal group-hover:opacity-0 transition-opacity">About</span>
                <span className="block font-medium absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">About</span>
              </a>
              <a href="#" className="font-roboto text-[20px] leading-[150%] tracking-[-0.2px] text-black relative group inline-block text-center">
                <span className="block font-normal group-hover:opacity-0 transition-opacity">Contact</span>
                <span className="block font-medium absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Contact</span>
              </a>
            </nav>
            
            <div className="w-px h-5 bg-black/20 mx-8"></div>
            
            {/* Language Switcher */}
            <div className="flex items-center" ref={languageMenuRef}>
              {/* Additional flags with smooth transition */}
              <div 
                className="flex gap-2 transition-all duration-300 ease-in-out overflow-hidden"
                style={{ 
                  width: isLanguageOpen ? '64px' : '0', // Adjust width based on your flags + gap
                  opacity: isLanguageOpen ? '1' : '0',
                }}
              >
                <button className="flex-shrink-0">
                  <img 
                    src={jaflag} 
                    alt="Switch to Japanese"
                    className="w-6 h-6"
                  />
                </button>
                <button className="flex-shrink-0">
                  <img 
                    src={enflag} 
                    alt="Switch to English"
                    className="w-6 h-6"
                  />
                </button>
              </div>
              {/* French flag button */}
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex-shrink-0"
              >
                <img 
                  src={frflag} 
                  alt="Current Language"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopMenu;