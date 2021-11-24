import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 w-full h-screen">
        <section className="h-1/2 w-full">
          <h1
            className=" flex flex-col items-center justify-center text-center w-full h-1/4 text-mainBlue-default font-semibold  
          text-2xl sm:text-3xl lg:text-4xl"
          >
            Our Mission
          </h1>
          <p
            className="flex flex-col items-center justify-center text-center w-full h-3/4 text-goldenBalance-extraLight bg-mainBlue-default font-semibold  
          text-sm sm:text-md lg:text-xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="h-1/2 w-full">
          <h1
            className=" flex flex-col items-center justify-center text-center w-full h-1/4 text-mainBlue-default font-semibold  
          text-2xl sm:text-3xl lg:text-4xl"
          >
            What we do
          </h1>
          <ul
            className="flex flex-col gap-4 items-baseline pl-8 justify-center text-center w-full h-3/4 text-goldenBalance-extraLight bg-mainBlue-default font-semibold  
          text-sm sm:text-md lg:text-xl
          list-disc"
          >
            <li>We present the best value for each item.</li>
            <li>Out items are carefully made, and tested to perfection.</li>
            <li>Customer service 24/7.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
