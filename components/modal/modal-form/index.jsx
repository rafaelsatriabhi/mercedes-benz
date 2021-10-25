/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const ModalForm = ({ setShowModal }) => {
  const [isOffered, setIsOffered] = useState(false);

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div aria-hidden onClick={() => setShowModal(false)} className="fixed z-50 h-full w-full bg-black bg-opacity-50 flex justify-center pt-14">
      <div className="flex flex-col justify-evenly text-black h-full bg-blue-100 max-w-xl p-5">
        <div className="bg-white h-full py-10" aria-hidden onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col items-center">
            <div className="text-xxl laptop:text-xxxl">Mercedes-Benz</div>
            <div>-Jakarta-</div>
            <div className="text-center">Enter this form below, and get your special offers!</div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full mt-16 text-black px-2">
            <input {...register('front-name', { required: true })} className="my-2.5 p-2 w-full" placeholder="Nama" type="text" />
            <input className="my-2.5 p-2 w-full" placeholder="Nomor Telepon" type="number" />
            <select {...register('estimation-order-date')} className="my-2.5 p-2 w-full" name="" id="">
              <option value="">Pilih estimasi waktu pembelian</option>
              <option value="ASAP">Secepatnya</option>
              <option value="0 - 1 Month">0 - 1 Bulan</option>
              <option value="2 - 3 Bulan">2 - 3 Bulan</option>
              <option value="not decided yet">Belum tahu</option>
            </select>
            <select {...register('type')} className="my-2.5 p-2 w-full" name="" id="">
              <option value="">Pilih model</option>
              <option value="Mercedes-Benz A-Class">Mercedes-Benz A-Class</option>
              <option value="Mercedes-Benz B-Class">Mercedes-Benz B-Class</option>
              <option value="Mercedes-Benz C-Class">Mercedes-Benz C-Class</option>
              <option value="Mercedes-Benz E-Class">Mercedes-Benz E-Class</option>
              <option value="Mercedes-Benz S-Class">Mercedes-Benz S-Class</option>
              <option value="Mercedes-Benz V-Class">Mercedes-Benz V-Class</option>
              <option value="Other">Lainnya</option>
            </select>
            <div className="flex">
              <input onClick={() => setIsOffered(!isOffered)} {...register('gotOffered')} type="checkbox" name="" id="" />
              <div>Saya sudah mendapat penawaran dari dealer lain</div>
            </div>
            {
              isOffered
              && (
              <>
                <input {...register('other-dealer')} className="my-2.5 p-2 w-full" placeholder="Nama dealer" type="text" />
                <input {...register('price-offered')} className="my-2.5 p-2 w-full" placeholder="Harga yang ditawarkan (OTR)" type="number" />
              </>
              )
            }
            <input className="relative bottom-0 w-full bg-primary text-white py-2 text-base rounded-md" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

ModalForm.propTypes = {
  setShowModal: PropTypes.node.isRequired,
};

export default ModalForm;
