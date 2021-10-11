import React from 'react';
import moment from 'moment';
import ProductCard from '../../../../product-card';

const SpecialOffersSection = () => (
  <div id="special-offers-section" name="special-offers-section" className="py-6 px-4">
    <div className="p-3">
      <div className="text-3xl font-semibold mb-2">
        Penawaran Spesial
        <div className="text-xl text-gray-400">
          (Bulan
          {' '}
          {moment().locale('id').format('MMMM')}
          )
        </div>
      </div>
      <div>
        Temukan berbagai pilihan mobil dengan promo diskon lebih besar
      </div>
      <div className="text-sm">
        (selama unit masih ada)
      </div>
    </div>
    <div className="p-3 flex flex-wrap justify-evenly">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
);

export default SpecialOffersSection;
