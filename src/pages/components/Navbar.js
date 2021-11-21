import { React, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false); //to check if the menu is shown or hidden
  const [navClasses, setNavClasses] = useState("-translate-y-96"); // the classes that are applied to the small screen nav
  const cart = useSelector((state) => state.cart.carts);

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
                to="products"
                className={({ isActive }) =>
                  "" + (isActive ? " text-red-800 font-semibold" : "")
                }
              >
                Products
              </NavLink>
              <NavLink
                to="cart"
                className={({ isActive }) =>
                  "" + (isActive ? " text-red-800 font-semibold" : "")
                }
              >
                Cart [{cart.length}]
              </NavLink>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Link to="login">
                <button className=" border border-bgLight text-bgLight font-semibold py-1 px-2 rounded transition-all duration-150 hover:bg-bgLight hover:text-bgDark">
                  Login
                </button>
              </Link>

              <Link to="register">
                <button className=" border border-bgLight text-bgLight font-semibold py-1 px-2 rounded transition-all duration-150 hover:bg-bgLight hover:text-bgDark">
                  Register
                </button>
              </Link>
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
      <div className="relative z-40">
        {/* Menu for sm screen + Add same links to other menu only show those when
        sm: and larger */}
        <div
          className={`absolute sm:hidden h-auto w-full flex justify-between items-center px-2 py-2
           bg-bgDark text-bgLight transition-transform duration-700 transform ${navClasses}`}
        >
          <ul className="flex w-full flex-col gap-1 px-4">
            <NavLink
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
              to="about"
              className={({ isActive }) =>
                "" + (isActive ? " text-red-800 font-semibold" : "")
              }
            >
              About Us
            </NavLink>
            <NavLink
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
              to="products"
              className={({ isActive }) =>
                "" + (isActive ? " text-red-800 font-semibold" : "")
              }
            >
              Products
            </NavLink>
            <NavLink
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
              to="cart"
              className={({ isActive }) =>
                "" + (isActive ? " text-red-800 font-semibold" : "")
              }
            >
              Cart [{cart.length}]
            </NavLink>

            <Link
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
              to="login"
            >
              <button className="w-2/4 border border-bgLight text-bgLight font-semibold py-1 rounded transition-all duration-150 hover:bg-bgLight hover:text-bgDark">
                Login
              </button>
            </Link>

            <Link
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
              to="register"
            >
              <button className="w-2/4 border border-bgLight text-bgLight font-semibold py-1 rounded transition-all duration-150 hover:bg-bgLight hover:text-bgDark">
                Register
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
