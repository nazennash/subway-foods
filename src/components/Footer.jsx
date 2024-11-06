import React from "react";
import logo from "../assets/logo.png";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <div className="bg-gray-50 mt-5 shadow-sm ">
        <div className="text-center container mx-auto py-4 sm:border-b">
          &copy; {new Date().getFullYear()} Nash Oliver | All rights reserved
        </div>
        <div className="items-center justify-between  container mx-auto mt-3 hidden sm:flex">
          <div className="hidden sm:flex">
            <img
              src={logo}
              alt=""
              className="w-32"
              style={{
                filter: "hue-rotate(330deg) saturate(2) brightness(0.5)",
              }}
            />
          </div>

          <div className="flex gap-5">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex gap-5">
            <BsLinkedin size={25} />
            <BsTwitterX size={25} />
          </div>
        </div>
      </div>
    </>
  );
};
