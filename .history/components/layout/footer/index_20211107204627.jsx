import React from 'react';
import moment from 'moment';

const Footer = () => (
  <footer id="contact-us" className="bg-grey w-full laptop-m:w-screen text-white flex flex-col items-center mt-20">
    <div className="max-w-1280px tablet:w-full flex flex-col tablet:flex-row tablet:justify-around px-7 py-6">
      <div className="flex flex-col text-xxs mb-10 tablet:mb-0">
        <div className="mb-5 text-lg font-bold">Hubungi Kami</div>
        <div className="text-sm">
          <p className="w-full tablet:my-2.5">
            <a href="tel:+6281285655853">
              Telepon: 081285655853
            </a>
          </p>
          <div className="w-full">Email: halo@mercedes-benz.web.id</div>
        </div>
      </div>
    </div>
    <div className="bg-black w-full text-center text-xs laptop:text-sm">
      Copyright ©
      {' '}
      {moment().format('yyyy')}
      {' '}
      Mercedes-Benz Jakarta
    </div>
  </footer>
);

export default Footer;
