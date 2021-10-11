import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import CarouselSection from '../components/layout/pages/home/carousel-section';
import OurBenefitsSection from '../components/layout/pages/home/our-benefits-section';
import NusantaraLocation from '../components/layout/pages/home/nusantara-location-section';
import SpecialOffersSection from '../components/layout/pages/home/special-offers-section';

const Home = () => (
  <>
    <Head>
      <title>Mercedes-Benz Indonesia - Home</title>
      {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
    <Layout>
      <div className="w-full flex flex-col items-center overflow-hidden">
        <div className="w-screen laptop-m:w-full">
          <CarouselSection />
          <OurBenefitsSection />
          <SpecialOffersSection />
          <NusantaraLocation />
        </div>
      </div>
    </Layout>
  </>
);

export default Home;
