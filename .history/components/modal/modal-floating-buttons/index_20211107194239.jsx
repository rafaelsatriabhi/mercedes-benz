import React from 'react';
import { useRouter } from 'next/router';

const ModalFloatingButtons = () => (
  <div className="fixed right-2.5 bottom-2.5 laptop:hidden">
    <a
      href="https://api.whatsapp.com/send/?phone=6281285655853&text&app_absent=0?lang=id"
      target="_blank"
      rel="noreferrer"
      className="relative bg-white w-16 h-16 p-3.5 mobile-m:w-20 mobile-m:h-20 mobile:p-5 rounded-full border-2 border-gray-700"
    >
      <div className="absolute right-1.5 top-1.5 rounded-full bg-red-600 animate-ping border-2 w-2.5 h-2.5 " />
      <img className="animate-pulse" src="/assets/designs/whatsapp-logo-light-green.png" alt="" />
    </a>
  </div>
);

export default ModalFloatingButtons;
