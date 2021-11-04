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
      <div className="flex flex-col items-center text-xxs mb-10">
        <div className="mb-5 text-lg font-bold">Isi form dibawah ini untuk mendapatkan penawaran.</div>
        <form className="w-full text-black">
          <input className="my-2.5 p-2 w-full" placeholder="Nama" type="text" />
          <input className="my-2.5 p-2 w-full" placeholder="Email (Opsional)" type="text" />
          <input className="my-2.5 p-2 w-full" placeholder="Nomor Telepon" type="number" />
          <textarea defaultValue="Tulis pesan Anda disini" className="my-2.5 p-2 w-full text-gray-400" rows="4" name="comment" form="usrform" />
          <input className="w-full bg-primary text-white py-2 text-base rounded-md" type="submit" />
        </form>
      </div>
    </div>
  </footer>
);

export default Footer;