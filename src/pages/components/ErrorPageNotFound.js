import React from "react";
import Error from "../../error.svg";

export default function ErrorPageNotFound() {
  return (
    <div>
      <div className="max-screen h-auto flex flex-col gap-4 items-center justify-center p-4">
        <img
          className="h-72 sm:h-96"
          src={Error}
          alt="Error 404, page not found"
        />
        <p className="text-lg font-semibold">Error #404, page not found.</p>
        <p className="text-md text-center">
          The URL you are trying to reach doesn't exsist,Please enter a valid
          URL.
        </p>
      </div>
    </div>
  );
}
