import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const IntroductionSection = ({ setShowModal }) => {
  const router = useRouter();
  return (
    <>
      <section className="w-full 96" id="carousel-section">
        <div className="flex flex-col laptop:flex-row justify-center laptop:justify-between w-full h-full bg-gradient-to-t laptop:bg-gradient-to-r from-black">
          <div className="w-full laptop:w-6/12 px-3.5 pt-10 h-full">
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
          <div className="w-full laptop:w-4/12 pl-3.5 laptop:pr-16 flex flex-col items-center justify-center bottom-0 laptop:bottom-28">
            <div aria-hidden role="button" onClick={() => setShowModal(true)} className="text-center bg-red-800 w-full py-4 my-5 transition duration-500 ease-in-out bg-red-600 hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110 rounded-md">Berikan Saya Penawaran Terbaik</div>
            <a
              href="https://api.whatsapp.com/send/?phone=6281285655853&text&app_absent=0?lang=id"
              target="_blank"
              rel="noreferrer"
              className="border-4 border-green-600 hover:bg-green-200 hover:text-black flex items-center justify-center w-full py-4 rounded-md text-center"
            >
              <img className="w-6 mr-5" src="/assets/designs/whatsapp-logo-light-green.png" alt="whatsapp logo" />
              <div>WhatsApp</div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

IntroductionSection.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default IntroductionSection;
