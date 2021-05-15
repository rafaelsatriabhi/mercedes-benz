import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselSection = () => (
  <>
    <section id="carousel-section">
      <div className="hidden md:flex">
        <Carousel
          autoPlay
          infiniteLoop
          transitionTime={2000}
          interval={4000}
          showThumbs={false}
          showStatus={false}
        >
          <img src="/assets/images/toktok-banner-coming-soon(1).jpg" alt="" />
          <img src="/assets/images/toktok-banner-coming-soon(2).jpg" alt="" />
        </Carousel>
      </div>
      <div className="md:hidden">
        <Carousel
          autoPlay
          infiniteLoop
          transitionTime={2000}
          interval={4000}
          showThumbs={false}
          showStatus={false}
        >
          <img src="/assets/images/toktok-banner-coming-soon-mobile(1).jpg" alt="" />
          <img src="/assets/images/toktok-banner-coming-soon-mobile(2).jpg" alt="" />
        </Carousel>
      </div>
    </section>
  </>
);

export default CarouselSection;
