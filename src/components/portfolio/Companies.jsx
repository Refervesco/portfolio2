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
    <div className="w-[180px] h-[100px] rounded flex items-center justify-center bg-white">
      <img src={src} alt={alt} className="max-w-full max-h-full p-2" />
    </div>
  );

  return (
    <div className="w-full bg-white py-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[60px]">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="max-w-3xl text-4xl font-bold mb-4">
            <span className="relative z-10">The companies I have{' '}</span>
            <span className="relative inline-block">
              <span className="relative z-10">worked for</span>
              <svg 
                className="absolute bottom-[0px] left-0 w-full h-auto"
                width="178" 
                height="23" 
                viewBox="0 0 178 23" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  d="M37.7732 2.99978C15.7732 2.99978 0.272666 1.49994 0.273154 8.99978C-0.726846 12.3331 0.473153 19.4998 13.2732 21.4998C26.0732 23.4998 157.273 23.9999 166.273 19.4999C175.273 15.4999 177.773 4.99994 177.773 0C168.773 5.5 65.2732 2.99978 37.7732 2.99978Z" 
                  fill="#F5DD50"
                />
              </svg>
            </span>
            <span className="relative z-10">{' '}or{' '}</span>
            <span className="relative inline-block">
              <span className="relative z-10">partnered with</span>
              <svg 
                className="absolute bottom-[0px] left-0 w-full h-auto"
                width="244" 
                height="26" 
                viewBox="0 0 244 26" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  d="M37.7732 6.49978C15.7732 6.49978 0.272666 4.99994 0.273154 12.4998C-0.726846 15.8331 0.473153 22.9998 13.2732 24.9998C26.0732 26.9998 218.5 26 227.5 21.5C236.5 17.5 244 4.99994 244 0C235 5.5 65.2732 6.49978 37.7732 6.49978Z" 
                  fill="#F5DD50"
                />
              </svg>
            </span>
            <span className="relative z-10">{' '}during my Product Journey</span>
          </h2>
          <p className="text-base relative z-10">
            Here is a selection of products I have worked on during my career, collaborating with leading global companies within various B2B industries. This list is not exhaustive, more will be added soon.
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
            Contact me {/*Career timeline*/}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Companies;