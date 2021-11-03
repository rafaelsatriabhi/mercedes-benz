import React from 'react';

const Footer = () => (
  <footer id="contact-us" className="bg-grey w-full laptop-m:w-screen text-white flex flex-col items-center mt-20 tablet:mt-24 laptop-m:mt-32">
    <div className="max-w-1280px tablet:w-full flex flex-col tablet:flex-row tablet:justify-around px-7 pt-10">
      <div className="flex flex-col text-xxs mb-10 tablet:mb-0">
        <div className="mb-5 text-lg font-bold">Hubungi Kami</div>
        <div className="text-sm">
          <p className="w-full tablet:my-2.5">
            <a href="tel:+6285162815991">
              Telepon: 085162815991
            </a>
          </p>
          <div className="w-full">Email: halo@mercedes-benz.web.id</div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
