import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState({
    isClicked: false,
  });

  const burgerMenuHanlder = () => {
    if (burgerMenu.isClicked) {
      setBurgerMenu({ isClicked: false });
    } else {
      setBurgerMenu({ isClicked: true });
    }
  };

  return (
    <header id="navbar" className="shadow bg-black z-50 sticky top-0 w-screen flex justify-center">
      <div className="w-full max-w-screen-xl">
        <div className="w-screen laptop-m:w-full flex items-center justify-between laptop-m:justify-start h-14 laptop-m:h-16">
          <div aria-hidden onClick={() => scroll.scrollToTop()} className="flex flex-row items-center">
            <img className="w-10 h-10 mx-2" src="/assets/designs/logo.svg" alt="mercedes-benz logo" />
            <div className="text-white text-lg font-medium w-60 mr-10">Mercedes-Benz Jakarta</div>
          </div>
          {/* START: NAVBAR MENU DESKTOP */}
          <div className="hidden w-full laptop-m:flex flex-row items-center font-medium justify-between">
            <div className="flex flex-row">
              <div className="transition ease-in-out duration-300 hover:bg-primary hover:text-white rounded-full py-1 px-2 mx-2" role="button" aria-hidden onClick={() => scroll.scrollToTop()}>Home</div>
              <div className="transition ease-in-out duration-300 hover:bg-primary hover:text-white rounded-full py-1 px-2 mx-2" role="button"><Link activeClass="active" className="test2" to="products-section" spy smooth duration={500}>Harga dan Spesifikasi</Link></div>
            </div>
            <div className="flex flex-row">
              <div className="transition ease-in-out duration-300 font-medium border border-white bg-warning text-black hover:bg-primary text-lg rounded-lg py-1 px-2 mx-2" role="button" aria-hidden onClick={() => scroll.scrollToBottom()}>Hubungi kami</div>
            </div>
          </div>
          {/* END: NAVBAR MENU DESKTOP */}
          {/* START: BURGER MENU LOGO */}
          <div className="laptop-m:hidden w-10 h-10">
            <div className="relative flex flex-col w-full h-full py-1.5 justify-center items-center">
              <div className={`absolute top-3.5 border border-white bg-white w-4 h-0 transform transition ease-out duration-500 ${burgerMenu.isClicked ? 'translate-x-16' : ''}`} />
              <div
                aria-hidden
                role="button"
                onClick={() => burgerMenuHanlder()}
                className={`absolute border border-white bg-white
              w-4 transform transition rotate-0 duration-100
              ${burgerMenu.isClicked ? 'origin-center rotate-45 duration-100' : ''}`}
              />
              <div
                aria-hidden
                onClick={() => burgerMenuHanlder()}
                className={`absolute border border-white bg-white w-4 transform transition rotate-0 duration-100
              ${burgerMenu.isClicked ? '-rotate-45 duration-100' : ''}`}
              />
              <div className={`absolute bottom-3.5 border border-white bg-white w-4 h-0
              transform transition ease-out duration-300 ${burgerMenu.isClicked ? 'translate-x-16' : ''}`}
              />
            </div>
          </div>
          {/* END: BURGER MENU LOGO */}
        </div>
      </div>
      <div className="absolute top-14 w-full flex justify-center">
        {
          burgerMenu.isClicked
          && (
          <div aria-hidden onClick={() => setBurgerMenu({ ...burgerMenu, isClicked: false })} className="laptop-m:hidden absolute pt-2 w-full h-screen bg-black bg-opacity-20 px-5 text-sm flex flex-col items-center" />
          )
        }
        {/* START: NAV BAR MOBILE */}
        <div className={`text-black laptop-m:hidden absolute transform ease-in-out ${burgerMenu.isClicked ? 'duration-500 translate-y-2' : 'duration-500 -translate-y-64'} bg-white w-300px rounded-2xl p-5`}>
          <div aria-hidden role="button" onClick={() => { setBurgerMenu({ ...burgerMenu, isClicked: false }); scroll.scrollToTop(); }}>Home</div>
          <div className="border-t my-5" />
          <div className="flex flex-col animation-pulse"><Link onClick={() => { setBurgerMenu({ ...burgerMenu, isClicked: false }); }} activeClass="active" aria-hidden role="button" style={{ width: '100%' }} to="special-offers-section" spy smooth duration={500}>Hot Deals</Link></div>
          <div className="border-t my-5" />
          <div aria-hidden role="button" onClick={() => { setBurgerMenu({ ...burgerMenu, isClicked: false }); scroll.scrollToBottom(); }}>Contact</div>
        </div>
        {/* END: NAV BAR MOBILE */}
      </div>
    </header>
  );
};

export default Header;
