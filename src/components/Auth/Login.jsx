import React from "react";
import logo from "../../assets/logo.png";
import { CgClose } from "react-icons/cg";

export const Login = ({ setIsSignup, setShowLogin }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="flex flex-col justify-center px-6 py-12 sm:px-8 bg-white rounded-lg shadow-xl w-full max-w-xs md:max-w-sm">
        <div className="flex items-center justify-between">
          <img className="h-10 w-auto" src={logo} alt="Logo" />
          <CgClose
            onClick={() => setShowLogin(false)}
            className="text-gray-600 cursor-pointer"
            size={24}
          />
        </div>
        <h2 className="mt-5 mb-5 border-b pb-5 text-center text-2xl font-bold tracking-tight text-gray-900">
          Login
        </h2>

        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full p-3 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full p-3 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-md bg-green-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
            >
              Login
            </button>
          </div>

          <div className="text-center">
            <span>Don't have an account? </span>
            <span
              onClick={() => setIsSignup(true)}
              className="text-green-600 cursor-pointer font-semibold"
            >
              Sign up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
