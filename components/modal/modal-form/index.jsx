/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const ModalForm = ({ setShowModal }) => {
  const [isOffered, setIsOffered] = useState(false);

  const {
    register, handleSubmit, watch, formState: { errors }, setValue,
  } = useForm();

  const checkBoxInputkHandler = () => {
    setIsOffered(!isOffered);
    if (isOffered) {
      setValue('offered_price', '');
    }
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div aria-hidden onClick={() => setShowModal(false)} className="fixed z-50 h-full w-full bg-black bg-opacity-50 flex justify-center pt-14">
      <div className="flex flex-col justify-evenly text-black h-full bg-blue-100 max-w-xl p-5">
        <div className="overflow-y-auto bg-white h-full py-10" aria-hidden onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col items-center">
            <div className="text-xxl laptop:text-xxxl">Mercedes-Benz</div>
            <div>-Jakarta-</div>
            <div className="text-center">Enter this form below, and get your special offers!</div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full mt-16 text-black px-2">
            <input {...register('frontName', { required: true })} className="my-2.5 p-2 w-full" placeholder="Nama" type="text" />
            <input {...register('phone_number', { required: true, minLength: 9, maxLength: 13 })} className="my-2.5 p-2 w-full" placeholder="Nomor Telepon" type="number" />
            <input {...register('city', { required: true })} className="my-2.5 p-2 w-full" placeholder="Kota domisili" type="text" />
            <select {...register('type', { required: true })} className="my-2.5 p-2 w-full">
              <option value="">Pilih model</option>
              <option value="Mercedes-Benz A-Class">Mercedes-Benz A-Class</option>
              <option value="Mercedes-Benz B-Class">Mercedes-Benz B-Class</option>
              <option value="Mercedes-Benz C-Class">Mercedes-Benz C-Class</option>
              <option value="Mercedes-Benz E-Class">Mercedes-Benz E-Class</option>
              <option value="Mercedes-Benz S-Class">Mercedes-Benz S-Class</option>
              <option value="Mercedes-Benz V-Class">Mercedes-Benz V-Class</option>
              <option value="Other">Lainnya</option>
            </select>
            <div className="flex items-center my-2">
              <input className="mr-2" onClick={() => checkBoxInputkHandler()} {...register('gotOffered')} type="checkbox" />
              <div className="text-xs">Saya sudah mendapat penawaran dari dealer lain</div>
            </div>
            {
              isOffered
              && (
              <>
                <input {...register('offered_price')} className="my-2.5 p-2 w-full" placeholder="Harga yang ditawarkan (OTR)" type="number" />
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
