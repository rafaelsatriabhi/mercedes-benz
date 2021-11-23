import '../styles/globals.css';
import React, { useEffect } from 'react';
import * as ga from '../lib/ga';
// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <div className="w-screen bg-black h-full flex flex-col justify-center items-center">
      <div className="bg-black-mercedes bg-fixed bg-no-repeat bg-center bg-contain max-w-1280px h-full flex flex-col items-center">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
