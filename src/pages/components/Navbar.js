import { React, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../features/authSlice";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false); //to check if the menu is shown or hidden
  const [navClasses, setNavClasses] = useState("-translate-y-96");
  // the classes that are applied to the small screen nav

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.carts);
  const userInfo = useSelector((state) => state.auth.user);

  let activeStyle = {
    borderBottom: "1px solid #bba35a",
  };

  return (
    <div className="">
      <div className="relative z-50 h-16 w-full flex justify-between items-center px-4 py-2 bg-mainBlue-default shadow-lg">
        <div className="flex items-center gap-2 w-full">
          <NavLink
            className="text-goldenBalance-extraLight hover:text-goldenBalance-light transition-all duration-200 active:text-goldenBalance-dark"
            to="/"
          >
            Home/Logo
          </NavLink>
          <ul className="w-full justify-between items-center gap-1 px-4 hidden sm:flex">
            <div className="flex items-center gap-4">
              <NavLink
                to="about"
                className={`text-goldenBalance-extraLight hover:text-goldenBalance-light transition-all duration-20 active:text-goldenBalance-dark`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About Us
              </NavLink>
              <NavLink
                to="products"
                className={`text-goldenBalance-extraLight hover:text-goldenBalance-light transition-all duration-200 active:text-goldenBalance-dark`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Products
              </NavLink>
              <NavLink
                to="cart"
                className={`text-goldenBalance-extraLight hover:text-goldenBalance-light transition-all duration-200 active:text-goldenBalance-dark`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Cart [{cart.length}]
              </NavLink>
            </div>
            <div className="flex items-center justify-center gap-2">
              {Object.keys(userInfo) < 2 ? (
                <div className="flex justify-center items-center gap-4">
                  <Link to="login">
                    <button
                      className=" border border-goldenBalance-default text-goldenBalance-default  font-semibold py-1 px-2 rounded transition-all duration-300
                     hover:bg-goldenBalance-default hover:text-mainBlue-default active:bg-goldenBalance-dark"
                    >
                      LogIn
                    </button>
                  </Link>

                  <Link to="register">
                    <button
                      className=" border border-goldenBalance-default text-goldenBalance-default  font-semibold py-1 px-2 rounded transition-all duration-300
                     hover:bg-goldenBalance-default hover:text-mainBlue-default active:bg-goldenBalance-dark"
                    >
                      Register
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex justify-center items-center gap-4">
                  <NavLink
                    to="/profile"
                    className="text-goldenBalance-extraLight hover:text-goldenBalance-light transition-all duration-200 active:text-goldenBalance-dark"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Profile
                  </NavLink>
                  <button
                    onClick={() => {
                      dispatch(logOut());
                    }}
                    className="border border-goldenBalance-default text-goldenBalance-default  font-semibold py-1 px-2 rounded transition-all duration-300
                    hover:bg-goldenBalance-default hover:text-mainBlue-default active:bg-goldenBalance-dark"
                  >
                    LogOut
                  </button>
                </div>
              )}
            </div>
          </ul>
        </div>
        {/* Small screen menu begins */}
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
           bg-mainBlue-default transition-transform duration-700 transform ${navClasses}`}
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
              className=" text-goldenBalance-extraLight hover:text-goldenBalance-light transition-all duration-200 active:text-goldenBalance-dark"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
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
              className="text-goldenBalance-extraLight hover:text-goldenBalance-light transition-all duration-200 active:text-goldenBalance-dark"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
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
              className="text-goldenBalance-extraLight hover:text-goldenBalance-light transition-all duration-200 active:text-goldenBalance-dark"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Cart [{cart.length}]
            </NavLink>

            {Object.keys(userInfo) < 2 ? (
              <div className="flex justify-center items-center gap-4">
                <Link
                  to="login"
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
                  <button
                    className=" border border-goldenBalance-default text-goldenBalance-default  font-semibold py-1 px-2 rounded transition-all duration-300
                    active:bg-goldenBalance-dark"
                  >
                    LogIn
                  </button>
                </Link>

                <Link
                  to="register"
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
                  <button
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
                    className=" border border-goldenBalance-default text-goldenBalance-default  font-semibold py-1 px-2 rounded transition-all duration-300
                   active:bg-goldenBalance-dark"
                  >
                    Register
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-4">
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
                  to="/profile"
                  className="text-goldenBalance-extraLight hover:text-goldenBalance-light transition-all duration-200 active:text-goldenBalance-dark"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Profile
                </NavLink>
                <button
                  onClick={() => {
                    dispatch(logOut());
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
                  className=" border border-goldenBalance-default text-goldenBalance-default  font-semibold py-1 px-2 rounded transition-all duration-300
                   active:bg-goldenBalance-dark"
                >
                  LogOut
                </button>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
