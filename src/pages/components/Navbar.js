import { React, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false); //to check if the menu is shown or hidden
  const [navClasses, setNavClasses] = useState("-translate-y-96"); // the classes that are applied to the small screen nav

  useEffect(() => {}, [navClasses]);

  return (
    <div className="">
      <div className="relative z-50 h-16 w-full flex justify-between items-center px-4 py-2 bg-bgDark shadow-lg">
        <div className="flex items-center gap-2 text-bgLight w-full">
          <NavLink to="/">Home/Logo</NavLink>
          <ul className="w-full justify-between items-center gap-1 px-4 hidden sm:flex">
            <div className="flex items-center gap-4">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  "" + (isActive ? " text-red-800 font-semibold" : "")
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  "" + (isActive ? " text-red-800 font-semibold" : "")
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  "" + (isActive ? " text-red-800 font-semibold" : "")
                }
              >
                About Us
              </NavLink>
            </div>

            <div className="flex items-center justify-center gap-2">
              <button className=" border border-bgLight text-bgLight font-semibold py-1 px-2 rounded transition-all duration-150 hover:bg-bgLight hover:text-bgDark">
                <Link to="login">Login</Link>
              </button>
              <button className=" border border-bgLight text-bgLight font-semibold py-1 px-2 rounded transition-all duration-150 hover:bg-bgLight hover:text-bgDark">
                <Link to="register">Register</Link>
              </button>
            </div>
          </ul>
          {/* <Link to="/about">About Us</Link> */}
        </div>
        <div className="sm:hidden">
          {/* This is for the menu button */}
          <button
            className="flex flex-col gap-1"
            onClick={() => {
              setShowNav(!showNav);

              // if to check if the nav is true or false
              if (showNav === false) {
                //apply classes to make it visible
                setNavClasses("-translate-y-0");
              } else {
                setNavClasses("-translate-y-96");

                // apply classes that make nav hidden
              }
            }}
          >
            <div
              className={`bg-bgLight h-1 w-4 transition-all duration-700 transform ${
                showNav ? "scale-x-150" : "scale-x-50"
              }`}
            ></div>
            <div
              className={`bg-bgLight h-1 w-4 transition-all duration-700 transform ${
                showNav ? "scale-x-150" : "scale-x-50"
              }`}
            ></div>
            <div
              className={`bg-bgLight h-1 w-4 transition-all duration-700 transform ${
                showNav ? "scale-x-150" : "scale-x-50"
              }`}
            ></div>
          </button>
        </div>
      </div>
      <div className="relative">
        {/* Menu for sm screen + Add same links to other menu only show those when
        sm: and larger */}
        <div
          className={`absolute h-auto w-full flex justify-between items-center px-2 py-2
           bg-bgDark text-bgLight transition-transform duration-700 transform ${navClasses}`}
        >
          <ul className="flex w-full flex-col gap-1 px-4">
            <NavLink
              to="about"
              className={({ isActive }) =>
                "" + (isActive ? " text-red-800 font-semibold" : "")
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                "" + (isActive ? " text-red-800 font-semibold" : "")
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                "" + (isActive ? " text-red-800 font-semibold" : "")
              }
            >
              About Us
            </NavLink>
            <button className=" border border-bgLight text-bgLight font-semibold py-1 rounded transition-all duration-150 hover:bg-bgLight hover:text-bgDark">
              <Link to="login">Login</Link>
            </button>
            <button className=" border border-bgLight text-bgLight font-semibold py-1 rounded transition-all duration-150 hover:bg-bgLight hover:text-bgDark">
              <Link to="register">Register</Link>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
