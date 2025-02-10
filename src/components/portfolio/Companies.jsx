import React from 'react';
import Adobe from '../../assets/logos/Adobe.svg';
import Cisco from '../../assets/logos/Cisco.svg';
import Denso from '../../assets/logos/Denso.svg';
import Google from '../../assets/logos/Google.svg';
import Here from '../../assets/logos/Here.svg';
import Honda from '../../assets/logos/Honda.svg';
import NTT from '../../assets/logos/NTT.svg';
import Sony from '../../assets/logos/Sony.svg';
import Tennaxia from '../../assets/logos/Tennaxia.svg';
import dedge from '../../assets/logos/dedge.svg';
import Drivemode from '../../assets/logos/Drivemode.svg';

const Companies = () => {
  const logoRow = [
    { src: Sony, alt: 'Sony' },
    { src: NTT, alt: 'NTT' },
    { src: Adobe, alt: 'Adobe' },
    { src: Cisco, alt: 'Cisco' },
    { src: Denso, alt: 'Denso' },
    { src: Drivemode, alt: 'Drivemode' },
    { src: Honda, alt: 'Honda' },
    { src: dedge, alt: 'dedge' },
    { src: Google, alt: 'Google' },
    { src: Here, alt: 'Here' },
    { src: Tennaxia, alt: 'Tennaxia' }
  ];

  const LogoBox = ({ src, alt }) => (
    <div className="w-[calc(50%-12px)] md:w-[180px] h-[100px] rounded flex items-center justify-center bg-white">
      <img src={src} alt={alt} className="max-w-full max-h-full p-2" />
    </div>
  );

  return (
    <div className="w-full bg-white py-16 md:py-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[60px]">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="max-w-3xl text-3xl md:text-4xl font-bold mb-4">
            The companies I have{' '}
            <span className="relative inline-block">
              <span className="relative z-10">worked for/with</span>
              <svg 
                className="absolute bottom-[0px] left-0 w-full h-auto"
                width="264" 
                height="26" 
                viewBox="0 0 264 26" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  d="M40.841 6.6144C17.0542 6.6144 0.294812 5.08811 0.29534 12.7202C-0.785879 16.1123 0.511582 23.4054 14.3512 25.4407C28.1908 27.4759 246.417 23.639 256.148 19.0596C265.879 14.9891 263.817 5.08811 263.817 0C252.569 7.02197 70.5746 6.6144 40.841 6.6144Z" 
                  fill="#F5DD50"
                />
              </svg>
            </span>
            {' '}during my Product Journey
          </h2>
          <p className="text-base relative z-10">
            Collaborating with leading global companies and building strong alliances within various B2B industries.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="w-full flex flex-wrap justify-center gap-6">
            {logoRow.map((logo) => (
              <LogoBox key={logo.alt} {...logo} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-black text-white rounded">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Companies;