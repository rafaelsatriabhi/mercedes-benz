import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import CarouselSection from '../components/layout/pages/home/carousel-section';

const Home = () => (
  <>
    <Head>
      <title>Mercedes-Benz Indonesia - Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <div className="w-full flex flex-col items-center overflow-hidden">
        <div className="w-screen xl:w-full">
          <CarouselSection />
        </div>
      </div>
    </Layout>
  </>
);

export default Home;
