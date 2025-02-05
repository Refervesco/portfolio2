import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.svg';
import frflag from '../../assets/fr-round.svg';
import enflag from '../../assets/en-round.svg';
import jaflag from '../../assets/ja-round.svg';

const TopMenu = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle click outside for language menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { text: 'Home', href: '#' },
    { text: 'Portfolio', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Contact', href: '#' }
  ];

  return (
    <header className="h-20 w-full relative">
      <div className="w-full mx-auto px-4 md:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo section */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="A Slice of Cheese" 
              className="w-[190px] h-[33px]"
            />
          </div>
          
          {/* Desktop Navigation and Flag section */}
          <div className="hidden md:flex items-center">
            <nav className="flex gap-8 mr-8">
              {menuItems.map((item) => (
                <a 
                  key={item.text}
                  href={item.href} 
                  className="font-roboto text-[20px] leading-[150%] tracking-[-0.2px] text-black relative group inline-block text-center"
                >
                  <span className="block font-normal group-hover:opacity-0 transition-opacity">{item.text}</span>
                  <span className="block font-medium absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{item.text}</span>
                </a>
              ))}
            </nav>
            
            <div className="w-px h-5 bg-black/20 mx-8"></div>
            
            {/* Language Switcher */}
            <div className="flex items-center" ref={languageMenuRef}>
              <div 
                className="flex gap-2 transition-all duration-300 ease-in-out overflow-hidden"
                style={{ 
                  width: isLanguageOpen ? '64px' : '0',
                  opacity: isLanguageOpen ? '1' : '0',
                }}
              >
                <button className="flex-shrink-0">
                  <img src={jaflag} alt="Switch to Japanese" className="w-6 h-6" />
                </button>
                <button className="flex-shrink-0">
                  <img src={enflag} alt="Switch to English" className="w-6 h-6" />
                </button>
              </div>
              <button onClick={() => setIsLanguageOpen(!isLanguageOpen)} className="flex-shrink-0">
                <img src={frflag} alt="Current Language" className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4" ref={mobileMenuRef}>
            {/* Language Switcher for Mobile */}
            <div className="flex items-center">
              <button onClick={() => setIsLanguageOpen(!isLanguageOpen)} className="flex-shrink-0">
                <img src={frflag} alt="Current Language" className="w-6 h-6" />
              </button>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="absolute top-full right-0 w-full md:w-64 bg-[#F5DD50] shadow-lg py-4 z-50">
                <nav className="flex flex-col">
                  {menuItems.map((item) => (
                    <a 
                      key={item.text}
                      href={item.href} 
                      className="px-8 py-3 text-black hover:bg-black/5 font-roboto text-[20px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
                {/* Mobile Language Options */}
                {isLanguageOpen && (
                  <div className="px-8 py-4 border-t border-black/10 mt-2 flex gap-4">
                    <button className="flex-shrink-0">
                      <img src={jaflag} alt="Switch to Japanese" className="w-6 h-6" />
                    </button>
                    <button className="flex-shrink-0">
                      <img src={enflag} alt="Switch to English" className="w-6 h-6" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopMenu;