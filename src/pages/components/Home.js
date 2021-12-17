import React from "react";
import HeroSlider from "./HeroSlider";
import Categories from "./Categories";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import PublicHome from "../PublicHome";

export default function Home() {
  const token = useSelector((state) => state.auth.user.token);
  const role = () => {
    if (token !== "") {
      const decodedToken = jwtDecode(token);
      return decodedToken.role;
    } else {
      return "";
    }
  };
  return (
    <div className="">
      {role() !== "" && (
        <div>
          <HeroSlider />
          <Categories />
        </div>
      )}
      {role() === "" && <PublicHome />}
    </div>
  );
}
