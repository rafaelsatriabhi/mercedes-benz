import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselSection = () => (
  <>
    <section id="carousel-section">
      <div className="">
        <Carousel
          autoPlay
          infiniteLoop
          transitionTime={2000}
          interval={4000}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <div className="absolute w-full h-full">
              <div className="absolute w-full h-full bg-black bg-opacity-30 px-4 py-10 flex flex-col justify-end">
                <div className="h-full w-full flex flex-col tablet:absolute tablet:top-0">
                  <div className="absolute tablet:bottom-4">
                    <div className="text-left">
                      Gapai mobil impian Anda dan dapatkan hadiah langsung
                    </div>
                    <div className="text-xl text-left">iPhone 12 Pro Max</div>
                  </div>
                  <div className="h-full tablet:pt-3.5 flex flex-col items-center justify-end tablet:items-start tablet:justify-start">
                    <div className="w-64 border border-white bg-transparent py-3 font-bold rounded-lg flex justify-center items-center">
                      <div className="h-8 w-8 mr-4">
                        <img className="object-contain" src="/assets/designs/whatsapp-logo-light-green.png" alt="whatsapp logo" />
                      </div>
                      <div className="text-xl">WhatsApp</div>
                    </div>
                    <div className="w-64 my-2">atau</div>
                    <div className="w-64 border border-white bg-gray-100 bg-opacity-50 py-3 font-bold rounded-lg flex justify-center items-center">
                      <div className="h-8 w-8 mr-4">
                        <img className="object-contain" src="/assets/designs/forms.png" alt="whatsapp logo" />
                      </div>
                      <div className="text-xl text-black">Isi Formulir</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="object-cover h-520px" src="/assets/images/person-pointing.jpg" alt="" />
          </div>
          <div>
            <img className="object-cover h-520px" src="/assets/images/flavien-MaraDXSaTho-unsplash.jpg" alt="" />
          </div>
        </Carousel>
      </div>
    </section>
  </>
);

export default CarouselSection;
