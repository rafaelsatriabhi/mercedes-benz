import React from 'react';

const ModalFloatingNotification = () => (
  <div className="fixed z-50 flex items-center justify-center h-full w-full">
    <div className="flex flex-col items-center bg-white rounded-md text-black text-center px-10 py-5">
      <img className="w-10" src="/assets/designs/check.png" alt="success logo" />
      <div>
        Form Berhasil Terkirim
      </div>
    </div>
  </div>
);

export default ModalFloatingNotification;
