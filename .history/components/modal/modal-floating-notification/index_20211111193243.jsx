import React from 'react';

const ModalFloatingNotification = () => (
  <div className="fixed z-50 flex items-center justify-center h-full w-full">
    <div className="flex flex-col items-center bg-white text-black text-center px-10 ">
        <img className="w-10" src="/assets/designs/check.png" alt="" />
      <div>
        Form Berhasil Terkirim
      </div>
    </div>
  </div>
);

export default ModalFloatingNotification;
