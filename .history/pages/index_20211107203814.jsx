import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import IntroductionSection from '../components/layout/pages/home/introduction-section';
import OurBenefitsSection from '../components/layout/pages/home/our-benefits-section';
// import NusantaraLocation from '../components/layout/pages/home/nusantara-location-section';
import SpecialOffersSection from '../components/layout/pages/home/special-offers-section';
import BonusSection from '../components/layout/pages/home/bonus-section';
import ModalForm from '../components/modal/modal-form';
import ModalFloatingButtons from '../components/modal/modal-floating-buttons';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [specialOffersData] = useState([
    {
      body_type: 'hatchback',
      fuel: 'petrol',
      gearbox: 'AT',
      brand: 'Mercedes-Benz',
      name: 'A 200 Sedan',
      image: '/assets/images/mercedes-benz/mercedes-benz-a-200-sedan-a-class-sedan-progressive-line-indonesia.jpg',
      offtr_price: 0,
      otr_price: 876000000,
      discount: 52000000,
    },
    {
      body_type: 'suv',
      fuel: 'petrol',
      gearbox: 'AT',
      brand: 'Mercedes-Benz',
      name: 'GLA 200 AMG ',
      image: '/assets/images/mercedes-benz/mercedes-benz-new-gla-200-gla-class-amg-line.jpg',
      offtr_price: 0,
      otr_price: 883000000,
      discount: 80000000,
    },
    {
      body_type: 'suv',
      fuel: 'petrol',
      gearbox: 'AT',
      brand: 'Mercedes-Benz',
      name: 'GLB 200 Progressive Line',
      image: '/assets/images/mercedes-benz/mercedes-benz-glb-200-glb-class-progressive-line-indonesia.jpg',
      otffr_price: 0,
      otr_price: 1005000000,
      discount: 81000000,
    },
    {
      body_type: 'suv',
      fuel: 'petrol',
      gearbox: 'AT',
      brand: 'Mercedes-Benz',
      name: 'GLC 200 AMG Line',
      image: '/assets/images/mercedes-benz/mercedes-benz-glc-200-glc-class-amg-line-indonesia.jpg',
      offtr_price: 0,
      otr_price: 1216000000,
      discount: 41000000,
    },
    {
      body_type: 'suv',
      fuel: 'petrol',
      gearbox: 'AT',
      brand: 'Mercedes-Benz',
      name: 'GLE 450 AMG Line',
      image: '/assets/images/mercedes-benz/mercedes-benz-gle-450-g-class-amg-indonesia.jpg',
      offtr_price: 0,
      otr_price: 1927000000,
      discount: 110000000,
    },
    {
      body_type: 'sedan',
      fuel: 'petrol',
      gearbox: 'AT',
      brand: 'Mercedes-Benz',
      name: 'E 300 AMG Line',
      image: '/assets/images/mercedes-benz/mercedes-benz-e-300-e-class-indonesia.jpg',
      offtr_price: 0,
      otr_price: 1480000000,
      discount: 0,
    },
  ]);
  return (
    <>
      <Head>
        <title>Mercedes-Benz Indonesia - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {
      showModal
      && (
      <ModalForm setShowModal={setShowModal} />
      )
      }
      <ModalFloatingButtons />
      <Layout>
        <div className="w-full flex flex-col items-center overflow-hidden">
          <IntroductionSection setShowModal={setShowModal} />
          <div className="w-screen px-4 laptop-m:w-full">
            <OurBenefitsSection />
            <SpecialOffersSection
              specialOffersData={specialOffersData}
            />
            <BonusSection />
            {/* <NusantaraLocation /> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
