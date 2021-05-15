import React from 'react';

const KopriSection = () => (
  <section id="kopri-section" className="flex flex-col lg:flex-row items-end px-8 lg:px-28 xl:px-36 mb-16 md:mb-24">
    <div className="w-full lg:w-1/2 flex justify-center items-center lg:justify-start">
      <img className="object-contain h-48 md:h-80" src="/assets/images/asn-greetings.jpg" alt="" />
    </div>
    <div className="lg:w-1/2 lg:flex lg:flex-col lg:items-center">
      <div className="flex flex-col justify-end lg:pl-16">
        <div className="text-lg lg:text-xxl xl:text-xxxl text-warning font-bold mt-10 lg:mt-0 mb-5 lg:mb-9">
          Toktok.Id Untuk ASN
        </div>
        <div className="text-xs text-justify">
          Diresmikan langsung oleh
          {' '}
          <strong>Bapak Presiden Joko Widodo</strong>
          {' '}
          pada 29 November 2016,
          {' '}
          <strong>Korpri</strong>
          {' '}
          (Korps Pegawai Republik Indonesia) meluncurkan Toko Online
          {' '}
          <strong>Korpri</strong>
          {' '}
          (Toktok.id) yang hadir untuk memberikan pelayanan yang terbaik kepada para
          {' '}
          <strong>ASN.</strong>
          <br />
          Dengan memberikan kemudahan berbelanja bagi Aparatur Sipil Negara atau
          {' '}
          <strong>ASN</strong>
          , Toktok.id berupaya membantu para
          {' '}
          <strong>ASN</strong>
          {' '}
          dalam memenuhi kebutuhannya dengan pelayanan berbasis online.
          Hal ini tentunya sejalan dengan upaya pemerintah yang ingin
          lebih memperkenalkan teknologi digital untuk para
          {' '}
          <strong>ASN.</strong>
          <br />
          Ingat belanja, Ingat Toktok.id
          <br />
          <strong>Maju bersama paraASN</strong>
        </div>
      </div>
    </div>
  </section>
);

export default KopriSection;
