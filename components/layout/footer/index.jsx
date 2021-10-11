import React from 'react';

const Footer = () => (
  <footer className="bg-grey w-full laptop-m:w-screen text-white flex flex-col items-center tablet:mt-24 laptop-m:mt-32">
    <div className="max-w-1280px w-300px tablet:w-full flex flex-col tablet:flex-row tablet:justify-around px-7 pt-10">
      Form disini
      <div id="contact-us" className="tablet:w-52 flex flex-col items-center text-xxs mb-10">
        <div className="mb-5 text-lg font-bold">Contact Us</div>
        <div className="text-justify mb-2.5">
          Jl. Letjen M.T. Haryono No.Kav. 5, RT.1/RW.1, Cawang, Kec. Kramat jati,
          Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 12830
        </div>
        <div className="w-full tablet:my-2.5">Telepon : 085162815991</div>
        <div className="w-full">Email   : halo@mercedes-benz.web.id</div>
      </div>
      <div className="flex flex-col">
        <div id="connect-with-us" className="tablet:w-52 flex flex-col items-center tablet:items-start text-xxs mb-10">
          <div className="mb-5 text-lg font-bold">Connect With Us</div>
          <div className="mb-2.5 flex flex-row">
            <img className="mr-8" src="/assets/designs/instagram.svg" alt="instagram logo" />
            <img className="ml-8" src="/assets/designs/facebook.svg" alt="facebook logo" />
          </div>
        </div>
        {/* <div id="download" className="tablet:w-52 flex flex-col items-center tablet:items-start
        text-xxs ">
          <div className="mb-5 text-lg font-bold">Download</div>
          <div className="mb-2.5 flex flex-row">
            <img className="" src="/assets/images/google-play.png" alt="google play logo" />
            <img className="" src="/assets/images/app-store.png" alt="app store logo" />
          </div>
        </div> */}
      </div>
    </div>
    <div className="h-8 w-full bg-primary text-xs flex justify-center items-center">Copyright © 2021 Toktok.id</div>
  </footer>
);

export default Footer;
