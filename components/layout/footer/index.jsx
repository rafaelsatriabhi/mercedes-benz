import React from 'react';

const Footer = () => (
  <footer className="bg-grey w-full xl:w-screen text-white flex flex-col items-center md:mt-24 xl:mt-32">
    <div className="max-w-1280px w-300px md:w-full flex flex-col md:flex-row md:justify-around px-7 pt-10">
      <div id="about-us" className="md:w-52 flex flex-col items-center mb-10 text-xxs">
        <div className="mb-5 text-lg font-bold">About Us</div>
        <div className="">
          TokTok.id (Toko Online Korpri), sebuah platform e-commerce.
          Layanan yang disediakan Korpri (Korps Pegawai Republik Indonesia)
          untuk memenuhi kebutuhan para ASN (Aparatur Sipil Negara).
          Kami ingin agar para ASN dapat menikmati pengalaman belanja tak terlupakan
          di TokTok.id dengan penawaran khusus, harga spesial, serta aneka promo menarik lainnya.
          Kemudahan berbelanja secara online yang dapat dilakukan kapanpun dan dimanapun,
          di dukung dengan beragamnya metode pembayaran yang dapat dipilih.
        </div>
      </div>
      <div id="contact-us" className="md:w-52 flex flex-col items-center text-xxs mb-10">
        <div className="mb-5 text-lg font-bold">Contact Us</div>
        <div className="text-justify mb-2.5">
          Jl. Arteri Permata Hijau No.11, RT.11/RW.10, Grogol Utara, Kec. Kby. Lama,
          Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12210
        </div>
        <div className="w-full md:my-2.5">Telepon : 02153663395</div>
        <div className="w-full">Email   : halo@toktok.id</div>
      </div>
      <div className="flex flex-col">
        <div id="connect-with-us" className="md:w-52 flex flex-col items-center md:items-start text-xxs mb-10">
          <div className="mb-5 text-lg font-bold">Connect With Us</div>
          <div className="mb-2.5 flex flex-row">
            <img className="mr-8" src="/assets/designs/instagram.svg" alt="instagram logo" />
            <img className="ml-8" src="/assets/designs/facebook.svg" alt="facebook logo" />
          </div>
        </div>
        {/* <div id="download" className="md:w-52 flex flex-col items-center md:items-start
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
