import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiCart, BiMenu, BiSearch } from "react-icons/bi";
import { Store } from "../context/Store";

export const Navbar = ({ setShowLogin }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const { totalQuantity } = useContext(Store);

  return (
    <>
      <div className="flex justify-between items-center container mx-auto mt-3 md:mt-0 md:py-5 px-3 lg:px-0">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="w-32"
              style={{
                filter: "hue-rotate(330deg) saturate(2) brightness(0.5)",
              }}
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-5 lg:gap-10 items-center">
          <Link
            onClick={() => setActiveMenu("home")}
            to="/"
            // className={activeMenu === "home" ? "text-orange-500" : ""}
          >
            home
          </Link>
          <Link onClick={() => setActiveMenu("menu")} to="/">
            menu
          </Link>
          <Link onClick={() => setActiveMenu("contact")} to="/">
            contact us
          </Link>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <BiSearch size={30} />
          <Link to="/cart" className="flex relative">
            <BiCart size={30} />
            <span className="absolute -top-2 left-6 bg-orange-500 text-white font-bold px-1.5 text-sm rounded-full">
              {totalQuantity()}
            </span>
          </Link>
          <Link
            to="/"
            onClick={() => setShowLogin(true)}
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

      {/* mobile navbar */}
      {showMobileMenu && (
        <div
          className="flex md:hidden flex-col gap-5 p-2 bg-slate-100 shadow-md"
          id="mobile-navbar"
        >
          <div className="flex flex-col p-3 capitalize gap-5">
            <BiSearch size={30} />
            <a href="/">home</a>
            <a href="#explore-menu">menu</a>
            <Link to="/">contact us</Link>
          </div>
          <div className="flex w-full justify-between">
            <Link
              to="/"
              onClick={() => setShowLogin(true)}
              className="bg-blue-500 text-white w-1/2 p-3 text-center rounded-l-lg"
            >
              Sign in
            </Link>
            <Link
              to="/"
              className="bg-green-500 text-white w-1/2 p-3 text-center rounded-r-lg"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
