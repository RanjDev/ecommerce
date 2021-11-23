import React from "react";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../services/eCommerceAPI";

export default function Categories() {
  const { data, isLoading, error } = useGetCategoriesQuery();

  if (isLoading) {
    return <p>is loading.. </p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  if (data) {
    return (
      <div>
        <p className="text-center font-semibold text-xs sm:text-sm md:text-lg text-goldenBalance-extraLight bg-mainBlue-default">
          Choose from our categories
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-4 lg:gap-8 w-screen h-auto sm:h-32 p-2 justify-center items-center bg-mainBlue-default">
          {data.map((datum) => {
            return (
              <Link to={`/category/${datum.name}`}>
                <div
                  className="m-2 text-xl p-2 rounded transition-all duration-300 shadow
                hover:shadow-xl group-hover:text-mainBlue-light group"
                >
                  <p
                    className="font-semibold uppercase text-xs sm:text-sm md:text-lg text-goldenBalance-extraLight
                 transition-all duration-300 group-hover:text-goldenBalance-light active:text-goldenBalance-dark"
                  >
                    {datum.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
