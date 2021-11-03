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
            <div className="text-white text-lg font-medium mr-10">Mercedes-Benz Jakarta</div>
          </div>
          {/* START: NAVBAR MENU DESKTOP */}
          <div className="hidden w-full laptop-m:flex flex-row items-center font-medium justify-between">
            <div className="flex flex-row">
              <div className="transition ease-in-out duration-300 hover:bg-primary hover:text-white rounded-full py-1 px-2 mx-2" role="button" aria-hidden onClick={() => scroll.scrollToTop()}>Home</div>
              <div role="button" className="transition ease-in-out duration-300 hover:bg-primary hover:text-white rounded-full py-1 px-2 mx-2"><Link activeClass="active" className="test2" to="special-offer-section" spy smooth duration={500}>Penawaran Spesial</Link></div>
            </div>
            <div className="flex flex-row">
              <div className="transition ease-in-out duration-300 font-medium border border-white bg-warning text-black hover:bg-primary text-lg rounded-lg py-1 px-2 mx-2" role="button" aria-hidden onClick={() => scroll.scrollToBottom()}>Hubungi kami</div>
            </div>
          </div>
          {/* END: NAVBAR MENU DESKTOP */}
          {/* START: BURGER MENU LOGO */}
          <div aria-hidden onClick={() => burgerMenuHanlder()} className="flex flex-col justify-around mr-2 px-1 py-2 laptop-m:hidden w-10 h-10">
            <div className="border-t border-2 border-white" />
            <div className="border-t border-2 border-white" />
            <div className="border-t border-2 border-white" />
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
          <div className="flex flex-col animation-pulse"><Link onClick={() => { setBurgerMenu({ ...burgerMenu, isClicked: false }); }} activeClass="active" aria-hidden role="button" style={{ width: '100%' }} to="special-offer-section" spy smooth offset={-50} duration={500}>Penawaran Spesial</Link></div>
          <div className="border-t my-5" />
          <div aria-hidden role="button"><Link onClick={() => { setBurgerMenu({ ...burgerMenu, isClicked: false }); }} activeClass="active" aria-hidden role="button" style={{ width: '100%' }} to="contact-us" spy smooth duration={500}>Hubungi kami</Link></div>
        </div>
        {/* END: NAV BAR MOBILE */}
      </div>
    </header>
  );
};

export default Header;
