import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const OurPartnersSection = () => (
  <section id="our-partners-section" className="flex flex-col lg:px-36 mb-10 md:mb-24">
    <div className="text-center text-sm md:text-xxl font-extrabold mb-2 md:mb-10 lg:mb-12">PARTNER KAMI</div>
    {/* START: CAROUSEL MOBILE */}
    <div className="md:hidden">
      <Carousel
        autoPlay
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable={false}
        infiniteLoop
        transitionTime={1500}
      >
        <div className="flex flex-row pt-7">
          <img className="h-11 object-contain" src="/assets/images/airlines-logo/CITILINK INDONESIA.png" alt="Citilink Indonesia Airlines Logo" />
          <img className="h-11 object-contain" src="/assets/images/airlines-logo/ETIHAD.png" alt="ETIHAD Airlines Logo" />
        </div>
        <div className="flex flex-row pt-2">
          <img className="h-20 object-contain" src="/assets/images/airlines-logo/FINNAIR.png" alt="FINNAIR Airlines Logo" />
          <img className="h-16 object-contain" src="/assets/images/airlines-logo/AIR NEW ZEALAND.png" alt="AIR NEW ZEALAND Airlines Logo" />
        </div>
        <div className="flex flex-row pt-4">
          <img className="h-11 object-contain" src="/assets/images/airlines-logo/GARUDA INDONESIA.png" alt="Garuda Indonesia Airlines Logo" />
          <img className="h-16 object-contain" src="/assets/images/airlines-logo/British Airways.png" alt="British Airways Airlines Logo" />
        </div>
        <div className="flex flex-row pt-6">
          <img className="h-11 object-contain" src="/assets/images/airlines-logo/HAWAIIAN AIRLINES,INC.png" alt="HAWAIIAN AIRLINES,INC Airlines Logo" />
          <img className="h-11 object-contain" src="/assets/images/airlines-logo/Japan Airlines.png" alt="Japan Airlines Airlines Logo" />
        </div>
        <div className="flex flex-row pt-6">
          <img className="h-11 object-contain" src="/assets/images/airlines-logo/KLM Royal Dutch Airlines.png" alt="KLM Royal Dutch Airlines Airlines Logo" />
          <img className="h-11 object-contain" src="/assets/images/airlines-logo/Qantas Airways.png" alt="Qantas Airways Airlines Logo" />
        </div>
        <div className="flex flex-row pt-6">
          <img className="h-11 object-contain" src="/assets/images/airlines-logo/LION AIR.png" alt="LION AIR Airlines Logo" />
          <img className="h-11 object-contain" src="/assets/images/airlines-logo/QATAR AIRWAYS.png" alt="QATAR AIRWAYS Airlines Logo" />
        </div>
        <div className="flex flex-row pt-6">
          <img className="h-11 object-contain" src="/assets/images/airlines-logo/SINGAPORE AIRLINES.png" alt="SINGAPORE AIRLINES Airlines Logo" />
          <img className="h-11 object-contain" src="/assets/images/airlines-logo/Cathay Pacific.png" alt="Cathay Pacific Airlines Logo" />
        </div>
        <div className="flex flex-row items-center pt-10">
          <img className="h-5 object-contain" src="/assets/images/airlines-logo/AMERICAN AIRLINES INC.png" alt="AMERICAN AIRLINES INC Airlines Logo" />
          <img className="h-5 object-contain" src="/assets/images/airlines-logo/Vietnam Airlines.png" alt="Vietnam Airlines Airlines Logo" />
        </div>
        <div className="flex flex-row pt-10">
          <img className="h-5 object-contain" src="/assets/images/airlines-logo/SWISS INTERNATIONAL AIRLINES.png" alt="SWISS INTERNATIONAL AIRLINES Airlines Logo" />
          <img className="h-5 object-contain" src="/assets/images/airlines-logo/Jeju Air.png" alt="Jeju Air Airlines Logo" />
        </div>
      </Carousel>
    </div>
    {/* END: CAROUSEL MOBILE */}
    {/* START: CAROUSEL DESKTOP */}
    <div className="hidden md:flex">
      <Carousel
        autoPlay
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable={false}
        infiniteLoop
        transitionTime={1500}
      >
        <div className="flex flex-row md:pt-2">
          <img className="h-11 lg:h-20 object-contain" src="/assets/images/airlines-logo/CITILINK INDONESIA.png" alt="Citilink Indonesia Airlines Logo" />
          <img className="h-11 lg:h-20 object-contain" src="/assets/images/airlines-logo/ETIHAD.png" alt="ETIHAD Airlines Logo" />
          <img className="h-11 lg:h-20 object-contain" src="/assets/images/airlines-logo/British Airways.png" alt="British Airways Airlines Logo" />
          <img className="h-11 lg:h-20 object-contain" src="/assets/images/airlines-logo/FINNAIR.png" alt="FINNAIR Airlines Logo" />
          <img className="h-11 lg:h-20 object-contain" src="/assets/images/airlines-logo/AIR NEW ZEALAND.png" alt="AIR NEW ZEALAND Airlines Logo" />
        </div>
        <div className="flex flex-row lg:pt-4">
          <img className="h-11 lg:h-16 object-contain" src="/assets/images/airlines-logo/GARUDA INDONESIA.png" alt="Garuda Indonesia Airlines Logo" />
          <img className="h-11 lg:h-16 object-contain" src="/assets/images/airlines-logo/HAWAIIAN AIRLINES,INC.png" alt="HAWAIIAN AIRLINES,INC Airlines Logo" />
          <img className="h-11 lg:h-16 object-contain" src="/assets/images/airlines-logo/Japan Airlines.png" alt="Japan Airlines Airlines Logo" />
          <img className="h-11 lg:h-16 object-contain" src="/assets/images/airlines-logo/KLM Royal Dutch Airlines.png" alt="KLM Royal Dutch Airlines Airlines Logo" />
          <img className="h-11 lg:h-16 object-contain" src="/assets/images/airlines-logo/Qantas Airways.png" alt="Qantas Airways Airlines Logo" />
        </div>
        <div className="flex flex-row">
          <img className="h-11 lg:h-20 object-contain" src="/assets/images/airlines-logo/LION AIR.png" alt="LION AIR Airlines Logo" />
          <img className="h-11 lg:h-20 object-contain" src="/assets/images/airlines-logo/QATAR AIRWAYS.png" alt="QATAR AIRWAYS Airlines Logo" />
          <img className="h-11 lg:h-20 object-contain" src="/assets/images/airlines-logo/SINGAPORE AIRLINES.png" alt="SINGAPORE AIRLINES Airlines Logo" />
          <img className="h-11 lg:h-20 object-contain" src="/assets/images/airlines-logo/Cathay Pacific.png" alt="Cathay Pacific Airlines Logo" />
        </div>
        <div className="flex flex-row items-center pt-8 md:pt-5 lg:pt-9">
          <img className="h-1 md:h-5 lg:h-7 object-contain" src="/assets/images/airlines-logo/AMERICAN AIRLINES INC.png" alt="AMERICAN AIRLINES INC Airlines Logo" />
          <img className="h-1 md:h-5 lg:h-7 object-contain" src="/assets/images/airlines-logo/SWISS INTERNATIONAL AIRLINES.png" alt="SWISS INTERNATIONAL AIRLINES Airlines Logo" />
          <img className="h-1 md:h-5 lg:h-7 object-contain" src="/assets/images/airlines-logo/Vietnam Airlines.png" alt="Vietnam Airlines Airlines Logo" />
          <img className="h-1 md:h-5 lg:h-7 object-contain" src="/assets/images/airlines-logo/Jeju Air.png" alt="Jeju Air Airlines Logo" />
        </div>
      </Carousel>
    </div>
    {/* END: CAROUSEL DESKTOP */}
  </section>
);

export default OurPartnersSection;
