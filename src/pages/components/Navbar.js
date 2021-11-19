import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false); //to check if the menu is shown or hidden
  const [navClasses, setNavClasses] = useState("hidden"); // the classes that are applied to the small screen nav
  return (
    <div className="">
      <div className="h-16 max-w-full flex justify-between items-center px-2 py-2 bg-bgDark ">
        <div className="flex gap-2 text-bgLight">
          <Link to="/">Home/Logo</Link>
          {/* <Link to="/about">About Us</Link> */}
        </div>
        <div className="sm:hidden">
          {/* This is for the menu button */}
          <button
            className="flex flex-col gap-1"
            onClick={() => {
              setShowNav(!showNav);
              // if to check if the nav is true or false
              if (showNav === true) {
                //apply classes to make it visible
              } else if (showNav === false) {
                // apply classes that make nav hidden
              }
            }}
          >
            <div
              className={`bg-red-200 h-1 w-4 transition-all duration-100 transform ${
                showNav ? "scale-x-150" : "scale-x-50"
              }`}
            ></div>
            <div
              className={`bg-red-200 h-1 w-4 transition-all duration-100 transform ${
                showNav ? "scale-x-150" : "scale-x-50"
              }`}
            ></div>
            <div
              className={`bg-red-200 h-1 w-4 transition-all duration-100 transform ${
                showNav ? "scale-x-150" : "scale-x-50"
              }`}
            ></div>
          </button>
        </div>
      </div>
      <div>
        Menu for sm screen + Add same links to other menu only show those when
        sm: and larger
      </div>
    </div>
  );
}
