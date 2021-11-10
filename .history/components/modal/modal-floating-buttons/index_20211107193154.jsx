import React from 'react';

const ModalFloatingButtons = () => (
  <div className="fixed right-2.5 bottom-2.5 laptop:hidden">
    <div className="bg-white w-16 h-16 p-3.5 mobile-m:w-20 mobile-m:h-20 mobile:p-5 rounded-full">
      <img className="animate-pulse" src="/assets/designs/whatsapp-logo-light-green.png" alt="" />
    </div>
  </div>
);

export default ModalFloatingButtons;
