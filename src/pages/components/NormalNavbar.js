import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../features/authSlice";

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
];

export default function NormalNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // The token
  // const token = useSelector((state) => state.auth.user.token);

  const cart = useSelector((state) => state.cart.carts);

  return (
    <Disclosure as="nav" className="bg-gray-800 ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlineClose
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <AiOutlineMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink
                    to="/"
                    className="flex items-center justify-center text-white text-sm font-sans font-semibold h-8 w-auto text-center
                    hover:bg-gray-700 hover:text-white  px-4 py-2 transition-all duration-300 rounded"
                  >
                    Koga
                  </NavLink>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-gray-900 text-white text-sm rounded px-4 py-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm transition-all duration-300 rounded "
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <NavLink
                  to="/cart"
                  className="relative flex flex-col items-center bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <span className="absolute bottom-5">
                    {cart.length === 0 ? "" : cart.length}
                  </span>
                  <BsCart2 className="h-6 w-6" aria-hidden="true" />
                </NavLink>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative z-10">
                  <div>
                    <Menu.Button
                      className="bg-gray-800 flex text-sm rounded-full focus:outline-none
                     focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                        alt="user profile"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                              isActive
                                ? "bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                                : "block px-4 py-2 text-sm text-gray-700"
                            }
                          >
                            Your Profile
                          </NavLink>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => {
                              dispatch(logOut());
                              navigate("/login");
                            }}
                            className={
                              (({ isActive }) =>
                                isActive ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700")
                            }
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-900 text-white text-sm rounded px-4 py-2"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 text-sm transition-all duration-300 rounded "
                  }
                  // aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
