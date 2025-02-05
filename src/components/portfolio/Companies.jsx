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
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-32">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="max-w-3xl text-3xl font-bold mb-4">
            The companies I have worked for or partnered with during my Product Journey
          </h2>
          <p className="text-base">
            Collaborating with leading global companies and building strong alliances within various B2B industries.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="max-w-7xl flex flex-wrap justify-center gap-6">
            {logoRow.map((logo) => (
              <LogoBox key={logo.alt} {...logo} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-black text-white rounded">
            Career timeline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Companies;