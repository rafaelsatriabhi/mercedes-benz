import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import CarouselSection from '../components/layout/pages/home/carousel-section';
import OurPartnersSection from '../components/layout/pages/home/our-partners-section';
import ProductsSection from '../components/layout/pages/home/products-section';
import PerjadinSection from '../components/layout/pages/home/perjadin-section';
import KopriSection from '../components/layout/pages/home/kopri-section';
import TokTokLocationSection from '../components/layout/pages/home/toktok-location-section';

const Home = () => (
  <>
    <Head>
      <title>TokTok.ID - Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <div className="w-full flex flex-col items-center overflow-hidden">
        <div className="w-screen xl:w-full">
          <CarouselSection />
          <ProductsSection />
          <OurPartnersSection />
          <PerjadinSection />
          <KopriSection />
          <TokTokLocationSection />
        </div>
      </div>
    </Layout>
  </>
);

export default Home;
