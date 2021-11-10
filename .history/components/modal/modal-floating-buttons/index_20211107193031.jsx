import React from 'react';

const ModalFloatingButtons = () => (
  <div className="fixed right-2.5 bottom-2.5 laptop:hidden">
    <div className="bg-white w-20 h-20 p-5 rounded-full">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
      <img className="" src="/assets/designs/whatsapp-logo-light-green.png" alt="" />
    </div>
  </div>
);

export default ModalFloatingButtons;
