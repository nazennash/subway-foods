import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BiCart, BiMenu, BiSearch } from "react-icons/bi";

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <>
      <div className="flex justify-between items-center container mx-auto mt-3 md:mt-0 md:py-5 px-3 lg:px-0">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-32"
            style={{ filter: "hue-rotate(330deg) saturate(2) brightness(0.5)" }}
          />
        </div>
        <div className="hidden md:flex gap-5 lg:gap-10 items-center">
          <Link onClick={() => setActiveMenu("home")} to="/">
            home
          </Link>
          <Link onClick={() => setActiveMenu("menu")} to="/">
            menu
          </Link>
          <Link onClick={() => setActiveMenu("mobile-app")} to="/">
            mobile-app
          </Link>
          <Link onClick={() => setActiveMenu("contact")} to="/">
            contact us
          </Link>
        </div>
        <div className="hidden md:flex gap-5 items-center">
          <BiSearch size={30} />
          <BiCart size={30} />
          <Link
            to="/cart"
            className="bg-orange-500 text-white font-semibold px-4 py-1 rounded-2xl hover:bg-orange-600"
          >
            Sign in
          </Link>
        </div>

        <div className="md:hidden">
          <BiMenu
            size={30}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        </div>
      </div>

      {/* Mobile Navbar Overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 z-50 flex flex-col gap-5 p-5 bg-black bg-opacity-70 text-white"
          id="mobile-navbar"
        >
          <div className="flex flex-col p-3 capitalize gap-5">
            <BiSearch size={30} onClick={() => setShowMobileMenu(false)} />
            <Link to="/" onClick={() => setShowMobileMenu(false)}>
              home
            </Link>
            <Link to="/" onClick={() => setShowMobileMenu(false)}>
              menu
            </Link>
            <Link to="/" onClick={() => setShowMobileMenu(false)}>
              mobile-app
            </Link>
            <Link to="/" onClick={() => setShowMobileMenu(false)}>
              contact us
            </Link>
          </div>
          <div className="flex w-full justify-between mt-5">
            <Link
              to="/signin"
              className="bg-blue-500 text-white w-1/2 p-3 text-center rounded-l-lg"
              onClick={() => setShowMobileMenu(false)}
            >
              Sign in
            </Link>
            <Link
              to="/login"
              className="bg-green-500 text-white w-1/2 p-3 text-center rounded-r-lg"
              onClick={() => setShowMobileMenu(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
