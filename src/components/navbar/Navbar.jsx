import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BiCart, BiMenu, BiSearch } from "react-icons/bi";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center container mx-auto p-5">
        <div>
          <img
            src={logo}
            alt=""
            className="w-32"
            style={{ filter: "hue-rotate(330deg) saturate(2) brightness(0.5)" }}
          />
        </div>
        <div className="hidden md:flex gap-5 lg:gap-10 items-center">
          <Link to="/">home</Link>
          <Link to="/">menu</Link>
          <Link to="/">mobile-app</Link>
          <Link to="/">contact us</Link>
        </div>
        <div className="hidden md:flex gap-5 items-center">
          <BiSearch size={30} />
          <BiCart size={30} />
          <Link
            to="/"
            className="bg-orange-500 text-white font-semibold px-4 py-1 rounded-2xl hover:bg-orange-600"
          >
            Sign in
          </Link>
        </div>

        <div className="md:hidden">
          <BiMenu
            size={30}
            onClick={() => {
              const mobileNavbar = document.getElementById("mobile-navbar");
              if (mobileNavbar) {
                mobileNavbar.classList.toggle("hidden");
              }
            }}
          />
        </div>
      </div>

      {/* mobile navbar */}
      <div
        className="flex md:hidden flex-col gap-5 p-5 bg-slate-100 shadow-md"
        id="mobile-navbar"
      >
        <BiSearch size={30} />
        <Link to="/">home</Link>
        <Link to="/">menu</Link>
        <Link to="/">mobile-app</Link>
        <Link to="/">contact us</Link>
        <Link to="/">Sign in</Link>
      </div>
    </>
  );
};
