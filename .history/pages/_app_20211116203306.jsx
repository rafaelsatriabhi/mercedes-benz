import '../styles/globals.css';
import React from 'react';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <div className="w-screen bg-black h-full flex flex-col justify-center items-center">
    <div className="bg-black-mercedes bg-fixed bg-no-repeat bg-center bg-contain max-w-1280px h-full flex flex-col items-center">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </div>
  </div>
);

export default MyApp;
