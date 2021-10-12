import React from 'react';
import moment from 'moment';
import ProductCard from '../../../../product-card';

const SpecialOffersSection = () => (
  <div id="special-offer-section" name="special-offer-section" className="py-6">
    <div className="py-3 mb-6">
      <div className="text-3xl font-semibold mb-2">
        Penawaran Spesial
        <div className="text-xl text-gray-400">
          (
          {' '}
          {moment().locale('id').format('MMMM YYYY')}
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
    <div className="flex flex-wrap justify-evenly">
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
