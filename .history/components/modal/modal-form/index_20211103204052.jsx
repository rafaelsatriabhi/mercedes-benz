/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { init } from 'emailjs-com';
import EmailJsAPI from '../../../pages/api/hello';
import numberWithCommas from '../../../helpers/number-with-commas-helper';

const ModalForm = ({ setShowModal }) => {
  init(process.env.NEXT_PUBLIC_EMAIL_JS_ID);
  const [isOffered, setIsOffered] = useState(false);
  const {
    register, handleSubmit, formState: { errors }, setValue,
  } = useForm();

  const checkBoxInputkHandler = () => {
    setIsOffered(!isOffered);
    if (isOffered) {
      setValue('offered_price', '');
    }
  };
  const onSubmit = async (dataForm) => {
    const form = {
      service_id: process.env.NEXT_PUBLIC_SERVIVE_ID,
      template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAIL_JS_ID,
      template_params: {
        from_name: dataForm.from_name,
        phone_number: dataForm.phone_number,
        city: dataForm.city,
        car_name: dataForm.car_name,
        gotOffered: dataForm.gotOffered ? 'Ya' : 'Tidak',
        offered_price: numberWithCommas(dataForm.offered_price),
      },
    };
    console.log(form);

    try {
      const { data } = await EmailJsAPI({
        method: 'POST',
        data: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(data);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div aria-hidden onClick={() => setShowModal(false)} className="fixed z-50 h-full w-full bg-black bg-opacity-50 flex justify-center">
      <div className="relative flex flex-col justify-evenly text-black h-full bg-black bg-opacity-25 w-96 laptop:w-full">
        <svg className="absolute right-5 top-2.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#505050" />
        </svg>
        <div className="overflow-y-auto bg-white h-full laptop:h-660px p-5" aria-hidden onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col items-center">
            <div className="text-xxl laptop:text-xxxl">Mercedes-Benz</div>
            <div>-Jakarta-</div>
            <div className="text-center">Enter this form below, and get your special offers!</div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-evenly w-full h-full text-black px-2">
            <input {...register('from_name', { required: true })} className="my-2.5 p-2 w-full" placeholder="Nama" type="text" />
            <input {...register('phone_number', { required: true, minLength: 9, maxLength: 13 })} className="my-2.5 p-2 w-full" placeholder="Nomor Telepon" type="number" />
            <input {...register('city', { required: true })} className="my-2.5 p-2 w-full" placeholder="Kota domisili" type="text" />
            <select {...register('car_name', { required: true })} className="my-2.5 p-2 w-full">
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
  setShowModal: PropTypes.func.isRequired,
};

export default ModalForm;
