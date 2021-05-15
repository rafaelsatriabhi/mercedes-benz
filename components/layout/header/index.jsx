import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState({
    isOpen: false,
  });

  const router = useRouter();

  return (
    <header className="z-50 sticky top-0 bg-white w-full flex justify-center">
      <div className="w-full max-w-screen-xl xl:px-14">
        <div className="w-screen xl:w-full flex items-center justify-center xl:justify-between h-14 xl:h-16">
          <div className="absolute left-5 xl:hidden">
            {
              burgerMenu.isOpen
                ? (
                  <svg alt="cross menu" onClick={() => setBurgerMenu({ ...burgerMenu, isOpen: false })} className="fill-current text-warning" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
                  </svg>
                )
                : (
                  <svg alt="burger menu" onClick={() => setBurgerMenu({ ...burgerMenu, isOpen: true })} className="fill-current text-warning" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
                  </svg>
                )
            }
          </div>
          <img className="w-28 object-contain" src="/assets/images/toktok-logo.jpg" alt="" />
          <div className="hidden xl:w-60 xl:flex flex-row items-center font-medium justify-between">
            <div aria-hidden role="button" onClick={() => router.push('/#')}>HOME</div>
            <div aria-hidden role="button" onClick={() => router.push('/#product-section')}>PRODUCT</div>
            <div aria-hidden role="button" onClick={() => router.push('/#contact-us')}>CONTACT</div>
          </div>
        </div>
      </div>
      {
        burgerMenu.isOpen
        && (
          <>
            <div aria-hidden role="button" onClick={() => setBurgerMenu({ ...burgerMenu, isOpen: false })} className="xl:hidden absolute pt-2 top-12 w-full h-screen bg-black bg-opacity-20 px-5 text-sm flex flex-col items-center" />
            <div className="xl:hidden absolute top-14 bg-white w-300px rounded-2xl p-5">
              <div aria-hidden role="button" onClick={() => { router.push('/#'); setBurgerMenu({ ...burgerMenu, isOpen: false }); }}>Home</div>
              <div className="border-t my-5" />
              <div aria-hidden role="button" onClick={() => { router.push('/#product-section'); setBurgerMenu({ ...burgerMenu, isOpen: false }); }}>Product</div>
              <div className="border-t my-5" />
              <div aria-hidden role="button" onClick={() => { router.push('/#contact-us'); setBurgerMenu({ ...burgerMenu, isOpen: false }); }}>Contact</div>
            </div>
          </>
        )
      }
    </header>
  );
};

export default Header;
