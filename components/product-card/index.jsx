import React from 'react';

const ProductCard = () => (
  <div className="tablet:w-80 mb-5 tablet:mb-10 border border-gray-200 p-5 rounded-md">
    <div className="relative ">
      <div className="absolute text-sm top-1 left-1 px-2 bg-red-600 flex">
        <div className="text-xs">
          Penawaran terbatas
        </div>
      </div>
    </div>
    <img src="/assets/images/mercedes-benz-cars/cls-250/2022_mercedes-benz_cls_21.jpg" alt="mercedes-benz CLS 250 2022" />
    <div className="">
      <div className="text-gray-400">Mercedes-Benz</div>
      <div>CLS 250 AMG Line</div>
    </div>
    {/* START: HORIZONTAL LINE */}
    <div className="border border-top w-full my-2" />
    {/* END: HORIZONTAL LINE */}
    <div className="flex flex-row text-xs justify-between">
      <div>
        <div>OTR: </div>
        <div className="line-through">Rp 1.900.000.000,-</div>
      </div>
      <div>
        <div>Promo Anti Nyesel: </div>
        <div>Rp 900.000.000,-</div>
      </div>
    </div>
  </div>
);

export default ProductCard;