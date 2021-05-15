import React from 'react';

const ProductsSection = () => (
  <section id="product-section" className="flex flex-col px-8 pb-16 lg:px-28 xl:px-36 py-12 lg:py-28">
    <div className="w-full flex flex-col lg:flex-row lg:justify-between">
      <div className="flex flex-col mb-10 lg:mb-0 text-xs lg:w-1/2">
        <div className="w-full lg:pr-16">
          <div className="flex justify-center lg:justify-start w-full">
            <img className="h-12 md:h-20 object-contain mb-8" src="/assets/images/toktravel-logo.jpg" alt="toktok logo" />
          </div>
          <div className="w-full lg:w-80 xl:w-auto text-justify">
            Dengan mobilitas yang tinggi, kebutuhan transportasi saat ini dirasa sudah menjadi salah
            satu kebutuhan primer. Walaupun tentunya di tengah
            kondisi pandemi harus tetap mengedepankan
            protokol kesehatan yang berlaku.
            <br />
            TokTravel hadir sebagai layanan yang disediakan oleh
            Toktok.id untuk memberikan kemudahan dalam
            melakukan pemesanan tiket transportasi. Dengan harga yang kompetitif dan promo
            yang menarik, TokTravel menjadi pilihan yang tepat untuk menemani perjalanan Anda.
            <br />
            <br />
            Mau kemana, sama TokTravel aja.
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end items-end lg:w-1/2">
        <img className="object-contain h-32 md:h-52 mr-6" src="/assets/images/toktravel-desktop.jpg" alt="toktravel-desktop" />
        <img className="object-contain h-32 md:h-52" src="/assets/images/toktravel-mobile.jpg" alt="toktravel-mobile" />
      </div>
    </div>
  </section>
);

export default ProductsSection;
