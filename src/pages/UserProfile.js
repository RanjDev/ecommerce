import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import jwtDecode from "jwt-decode";

export default function UserProfile() {
  const token = useSelector((state) => state.auth.user.token);

  if (token === "" || token === undefined) {
    return <Navigate to="/login" />;
  } else {
    const decodedToken = jwtDecode(token);
    return (
      <div>
        <div className="w-full h-auto flex flex-col justify-center items-center gap-6 p-4 sm:flex-row sm:p-8">
          <div>
            <img
              className="h-48 rounded-full sm:h-60 sm:rounded-md"
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt="user profile"
            />
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-lg font-semibold text-indigo-900">
              {`${decodedToken.firstName}  ${decodedToken.lastName}`}
            </h1>
            <p className="text-md">{decodedToken.email}</p>
            <div className="flex gap-4 items-center justify-center mt-16 ">
              <button
                className=" transition-all duration-300 text-goldenBalance-extraLight bg-indigo-700
                 hover:bg-indigo-800 active:bg-indigo-900
               px-2 py-2 rounded"
              >
                Change Password
              </button>
              <button
                className=" bg-gray-100 border-2 text-indigo-900 border-indigo-900 hover:bg-indigo-900 hover:text-gray-100
               active:bg-mainBlue-dark px-2 py-2 rounded transition-all duration-300"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
