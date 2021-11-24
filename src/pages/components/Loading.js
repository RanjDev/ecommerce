import React from "react";
import LoadingSVG from "../../loading.svg";

export default function Loading() {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center">
        <div>
          <img
            className="animate-spin-slow h-48 sm:h-60 lg:h-full"
            src={LoadingSVG}
            alt="loafing svg"
          />
          <p className="text-center">elemnts are loading</p>
        </div>
      </div>
    </div>
  );
}
