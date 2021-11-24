import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function UserProfile() {
  const userInfo = useSelector((state) => state.auth.user);

  if (Object.keys(userInfo) < 2) {
    console.log("user info is:" + userInfo);
    return <Navigate to="/login" />;
  } else {
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
            <h1 className="text-lg font-semibold text-bgDark">User Name</h1>
            <p className="text-md">{userInfo.email}</p>
            <div className="flex gap-4 items-center justify-center mt-16 ">
              <button
                className=" transition-all duration-300 text-goldenBalance-extraLight bg-mainBlue-light
                 hover:bg-mainBlue-default active:bg-mainBlue-dark
               px-2 py-2 rounded"
              >
                Change Password
              </button>
              <button
                className=" bg-goldenBalance-extraLight border-2 text-bgDark border-bgDark hover:bg-bgDark hover:text-goldenBalance-extraLight
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
