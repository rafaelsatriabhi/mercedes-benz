import '../styles/globals.css';

import React from 'react';

const MyApp = ({ Component, pageProps }) => (
  <div className="w-screen h-full flex flex-col justify-center items-center">
    <div className="max-w-1280px h-full flex flex-col items-center">
      <Component {...pageProps} />
    </div>
  </div>
);

export default MyApp;
