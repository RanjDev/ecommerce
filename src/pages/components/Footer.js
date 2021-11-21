import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="w-full border-t-2 border-gray-200 p-4 mt-16">
        <div>
          <div className="w-full my-4 flex flex-col items-center">
            <div className="w-4/6 h-auto bg-bgLight rounded shadow-2xl">
              <p className="text-center text-xs text-gray-600 mt-1 px-4">
                Join our news letter for the latest offers.
              </p>
              <form className="p-4">
                <label className="block text-gray-700  text-xs font-bold mb-2">
                  Enter your email:
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3  text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="leo@decaprio.com"
                    type="email"
                  />
                </label>

                <input
                  value="Join"
                  type="submit"
                  className="
                bg-actionBlue
                hover:bg-blue-700
                text-sm
                text-white
                font-semibold
                mt-2
                py-2
                px-4
                rounded
                focus:outline-none
                focus:shadow-outline"
                />
              </form>
            </div>
          </div>
          <div className="flex flex-col  justify-center items-center gap-4">
            <div className="flex flex-row gap-4">
              <FaTwitter className="bg-blue-600 text-white rounded-full text-xl p-1" />
              <FaGoogle className="bg-red-600 text-white rounded-full text-xl p-1" />
              <FaFacebookF className="bg-blue-700 text-white rounded-full text-xl p-1" />
            </div>
            <div>
              <ul className="w-full justify-between items-center gap-1 px-4 ">
                <div className="flex items-center gap-4">
                  <NavLink
                    to="/"
                    className="text-sm font-semibold text-gray-600 hover:text-gray-800"
                  >
                    Home
                  </NavLink>
                  |
                  <NavLink
                    to="about"
                    className="text-sm font-semibold text-gray-600 hover:text-gray-800"
                  >
                    About Us
                  </NavLink>
                  |
                  <NavLink
                    to="products"
                    className="text-sm font-semibold text-gray-600 hover:text-gray-800"
                  >
                    Products
                  </NavLink>
                </div>
              </ul>
            </div>
          </div>
          <div className="text-center pt-2 border-t-2 border-gray-400 font-mono">
            Created By:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/RanjDev"
              className="text-lg font-semibold text-gray-700 hover:text-gray-900"
            >
              RanjDev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
