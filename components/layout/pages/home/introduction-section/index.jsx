import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const IntroductionSection = () => (
  <>
    <section className="relative w-full" id="carousel-section">
      <div className="absolute justify-center w-full laptop:w-10/12 h-full bg-gradient-to-t laptop:bg-gradient-to-r from-black">
        <div className="px-3.5 pt-10 h-full">
          <div className="text-xxl font-bold bg-gradient-to-r from-black laptop:w-7/12 pl-1.5">
            Selamat datang di
            {' '}
            <br />
            {' '}
            Mercedes-Benz Jakarta
          </div>
          <div className="text-xl font-semibold my-2.5 pl-1.5">
            Kami dealer Mercedes-Benz terpercaya di Jakarta
          </div>
          <div className="pl-1.5">
            Menjamin untuk menawarkan mobil yang tepat dengan harga yang terbaik untuk Anda.
          </div>
        </div>
        <div className="absolute px-3.5 flex flex-col items-center justify-center bottom-0 laptop:bottom-28 w-full laptop:w-6/12 h-56">
          <div role="button" className="border-4 border-green-600 hover:bg-green-200 hover:text-black flex items-center justify-center w-full py-4 rounded-md text-center mb-5">
            <img className="w-6 mr-5" src="/assets/designs/whatsapp-logo-light-green.png" alt="whatsapp logo" />
            <div>WhatsApp</div>
          </div>
          <div className="bg-red-800 w-full py-4 rounded-md text-center">Berikan Saya Penawaran Terbaik</div>
        </div>
      </div>
      <img className="object-cover hidden tablet:flex h-520px" src="/assets/images/portrait-smiling-businessman-dressed-suit.jpg" alt="" />
      <img className="tablet:hidden object-cover h-520px" src="/assets/images/portrait-smiling-businessman-dressed-suit-mobile.jpg" alt="" />
    </section>
  </>
);

export default IntroductionSection;
