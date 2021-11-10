import React from 'react';

const ModalFloatingButtons = () => (
  <div className="fixed right-2.5 bottom-2.5 laptop:hidden">
    <div className="bg-white w-10 h-10 mobile-m:w-20 mobile-m:h-20 p-5 rounded-full">
      <img className="animate-pulse" src="/assets/designs/whatsapp-logo-light-green.png" alt="" />
    </div>
  </div>
);

export default ModalFloatingButtons;
