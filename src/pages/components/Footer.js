import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="w-full border-t-2 border-gray-200 p-4 mt-16">
        <div>
          <div className="w-full my-4 flex flex-col items-center">
            <div className="w-3/4 sm:w-2/4 h-auto bg-gray-100 rounded shadow-2xl">
              <p className=" text-xs text-gray-900 mt-1 px-4">
                Join our newsletter for the latest offers.
              </p>
              <form className="p-4">
                <label className="block text-gray-900 text-xs font-semibold mb-2">
                  Enter your email:
                  <input
                    className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-xs text-gray-700 leading-tight  focus:shadow-outline"
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
          <div className="flex flex-col  justify-center items-center gap-4 m-4">
            <div className="flex flex-row gap-4">
              <FaTwitter className="bg-blue-600 text-white rounded-full text-xl p-1" />
              <FaGoogle className="bg-red-600 text-white rounded-full text-xl p-1" />
              <FaFacebookF className="bg-blue-700 text-white rounded-full text-xl p-1" />
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
