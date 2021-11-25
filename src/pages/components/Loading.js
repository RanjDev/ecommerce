import React from "react";
import LoadingSVG from "../../loading.svg";

export default function Loading() {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center">
        <div>
          <img
            className="animate-spin-slow h-12 sm:h-24 lg:h-48"
            src={LoadingSVG}
            alt="loafing svg"
          />
          <p className="text-center">elemnts are loading</p>
        </div>
      </div>
    </div>
  );
}
