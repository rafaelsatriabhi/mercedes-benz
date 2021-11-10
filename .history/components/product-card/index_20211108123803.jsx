import React from 'react';
import PropTypes from 'prop-types';
import numberWithCommas from '../../helpers/number-with-commas-helper';

const ProductCard = ({ car }) => (
  <div className="bg-black hover:bg-white transition ease-in-out duration-500 bg-opacity-75 tablet:w-80 mb-5 tablet:mb-10 border border-gray-200 p-5 rounded-md">
    <div className="relative ">
      <div className="absolute text-sm top-1 left-1 px-2 bg-red-600 flex">
        <div className="text-xs">
          Penawaran terbatas
        </div>
      </div>
    </div>
    <img className="rounded-md" alt={`${car.brand} ${car.name}`} src={car.image} />
    <div className="">
      <div className="text-gray-200">{car.brand}</div>
      <div>{car.name}</div>
    </div>
    {/* START: HORIZONTAL LINE */}
    <div className="border-t w-full my-2" />
    {/* END: HORIZONTAL LINE */}
    <div className="flex flex-row text-xs justify-between">
      <div>
        <div>OTR: </div>
        <div className="line-through">{numberWithCommas(car.otr_price)}</div>
      </div>
      <div>
        <div>Special price: </div>
        <div>{numberWithCommas(car.otr_price - car.discount)}</div>
      </div>
    </div>
    <div className="bg-primary text-center rounded-sm mt-4 text-sm font-medium py-2">Hubungi Kami</div>
  </div>
);

ProductCard.propTypes = {
  car: PropTypes.shape({
    image: PropTypes.arrayOf(
      PropTypes.string,
    ),
    brand: PropTypes.string,
    name: PropTypes.string,
    otr_price: PropTypes.number,
    discount: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
