import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ProductCard from '../../../../product-card';

const SpecialOffersSection = ({ specialOffersData }) => (
  <div id="special-offer-section" name="special-offer-section" className="py-6">
    <div className="">
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
      {
        specialOffersData.map((car) => (
          <ProductCard key={Math.random()} car={car} />
        ))
      }
    </div>
  </div>
);

SpecialOffersSection.propTypes = {
  specialOffersData: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default SpecialOffersSection;
