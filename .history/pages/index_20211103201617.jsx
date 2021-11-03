import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import IntroductionSection from '../components/layout/pages/home/introduction-section';
import OurBenefitsSection from '../components/layout/pages/home/our-benefits-section';
// import NusantaraLocation from '../components/layout/pages/home/nusantara-location-section';
import SpecialOffersSection from '../components/layout/pages/home/special-offers-section';
import BonusSection from '../components/layout/pages/home/bonus-section';
import ModalForm from '../components/modal/modal-form';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [specialOffersData] = useState([
    {
      body_type: 'hatchback',
      fuel: 'petrol',
      gearbox: 'AT',
      brand: 'Mercedes-Benz',
      name: 'A 200 Sedan',
      images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', ''],
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
      images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', ''],
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
      images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', ''],
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
      images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', ''],
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
      images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', ''],
      offtr_price: 0,
      otr_price: 1927000000,
      discount: 110000000,
    },
    {
      body_type: 'sedan',
      fuel: 'petrol',
      gearbox: 'AT',
      brand: 'Mercedes-Benz',
      name: 'E 200 Avantgarde Line',
      images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', ''],
      offtr_price: 0,
      otr_price: 1172000000,
      discount: 0,
    },
    {
      body_type: 'sedan',
      fuel: 'petrol',
      gearbox: 'AT',
      brand: 'Mercedes-Benz',
      name: 'E 300 AMG Line',
      images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', ''],
      offtr_price: 0,
      otr_price: 1480000000,
      discount: 0,
    },
    {
      body_type: 'sedan',
      fuel: 'petrol',
      gearbox: 'AT',
      brand: 'Mercedes-Benz',
      name: 'S 450 L Exclusive Line',
      images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', ''],
      offtr_price: 0,
      otr_price: 2930000000,
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
      <Layout>
        {/* <div className="w-full flex flex-col items-center overflow-hidden">
          <IntroductionSection setShowModal={setShowModal} />
          <div className="w-screen px-4 laptop-m:w-full">
            <OurBenefitsSection />
            <SpecialOffersSection
              specialOffersData={specialOffersData}
            />
            <BonusSection />
            {/* <NusantaraLocation /> */}
          </div>
        </div> */}
      </Layout>
    </>
  );
};

export default Home;
