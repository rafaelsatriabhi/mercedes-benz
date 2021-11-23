import React from 'react';
import ModalStyles from './modal-floating-notification-styles.module.css';

const ModalFloatingNotification = () => (
  <div className={`${ModalStyles.animation}`}>
    <div className="flex flex-col items-center bg-white border border-black rounded-md text-black text-center px-10 py-5">
      <img className="w-10 animate-bounce" src="/assets/designs/check.png" alt="success logo" />
      <div>
        Form berhasil terkirim
      </div>
    </div>
  </div>
);

export default ModalFloatingNotification;
