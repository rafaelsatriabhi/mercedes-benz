import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import IntroductionSection from '../components/layout/pages/home/introduction-section';
import OurBenefitsSection from '../components/layout/pages/home/our-benefits-section';
// import NusantaraLocation from '../components/layout/pages/home/nusantara-location-section';
import SpecialOffersSection from '../components/layout/pages/home/special-offers-section';
import BonusSection from '../components/layout/pages/home/bonus-section';

const Home = () => (
  <>
    <Head>
      <title>Mercedes-Benz Indonesia - Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <div className="w-full flex flex-col items-center overflow-hidden">
        <IntroductionSection />
        <div className="w-screen px-4 laptop-m:w-full">
          <OurBenefitsSection />
          <SpecialOffersSection />
          <BonusSection />
          {/* <NusantaraLocation /> */}
        </div>
      </div>
    </Layout>
  </>
);

export default Home;
