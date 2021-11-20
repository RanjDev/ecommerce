import React from "react";
import Login from "../login.svg";
import { useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

export default function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs.firstname);
    console.log(inputs.lastname);
    console.log(inputs.email);
    console.log(inputs.password);
  };
  return (
    <div>
      <div className="w-full h-auto flex justify-center bg-gradient-to-tr from-bgDark via-purple-400 to-bgLight">
        <div className="w-full my-4 flex flex-col items-center">
          <img className="h-24" src={Login} alt="login" />
          <div className="w-4/6 h-auto bg-bgLight rounded shadow-2xl">
            <p className="text-center text-xs text-gray-600 mt-1 px-4">
              Our registered users benefit from our services.
            </p>
            <form onSubmit={handleSubmit} className="p-4">
              <label className="block text-gray-700 text-xs font-bold mb-2">
                Enter your first name:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Leonardo"
                  type="text"
                  name="firstname"
                  value={inputs.firstname || ""}
                  onChange={handleChange}
                />
              </label>
              <label className="block text-gray-700  text-xs font-bold mb-2">
                Enter your last name:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="DeCaprio"
                  type="text"
                  name="lastname"
                  value={inputs.lastname || ""}
                  onChange={handleChange}
                />
              </label>
              <label className="block text-gray-700  text-xs font-bold mb-2">
                Enter your email:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="leo@decaprio.com"
                  type="email"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </label>
              <label className="block text-gray-700  text-xs font-bold mb-2">
                Enter your password:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3  text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="NOT 1234"
                  type="password"
                  name="password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                />
              </label>

              <input
                value="Register"
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
            <div className="flex flex-col justify-center items-center gap-2 px-4 py-2">
              <p className="text-sm font-semibold text-bgDark">
                Or login using:
              </p>
              <div className="flex flex-row gap-4">
                <FaTwitter className="bg-blue-600 text-white rounded-full text-xl p-1" />
                <FaGoogle className="bg-red-600 text-white rounded-full text-xl p-1" />
                <FaFacebookF className="bg-blue-700 text-white rounded-full text-xl p-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
