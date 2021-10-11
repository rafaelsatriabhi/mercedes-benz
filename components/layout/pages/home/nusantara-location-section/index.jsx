import React from 'react';

const ShowRoomLocationSection = () => (
  <section id="toktok-location-section" className="w-full px-8 laptop:px-28 laptop-m:px-36 flex flex-col items-center">
    <div className="mb-6 tablet:mb-14 font-extrabold text-sm tablet:text-xxl">LOKASI KAMI</div>
    <iframe
      title="Mercedes-Benz Nusantara Location"
      width="100%"
      height="360"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCQtrj3gDDJWDVWpFfV20QDOQbcyWu_pB0&q=Mercedes+Benz+nusantara"
    />
  </section>
);

export default ShowRoomLocationSection;
