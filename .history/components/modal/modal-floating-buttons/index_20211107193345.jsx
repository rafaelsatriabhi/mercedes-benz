import React from 'react';

const ModalFloatingButtons = () => (
  <div className="fixed right-2.5 bottom-2.5 laptop:hidden">
    <div className="relative bg-white w-16 h-16 p-3.5 mobile-m:w-20 mobile-m:h-20 mobile:p-5 rounded-full">
      <div className="absolute -right-1 -top-1 rounded-full bg-red-200 animate-ping w-2.5 h-2.5 " />
      <img className="animate-pulse" src="/assets/designs/whatsapp-logo-light-green.png" alt="" />
    </div>
  </div>
);

export default ModalFloatingButtons;
