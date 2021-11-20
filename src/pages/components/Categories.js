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
      <div className="bg-gray-400 flex flex-wrap gap-2 w-screen h-auto justify-center items-center">
        {data.map((datum) => {
          return (
            <Link to={`/category/${datum.name}`}>
              <div className="border m-2 text-2xl p-4 rounded transition-all duration-300 transform hover:scale-110 hover:text-bgLight hover:bg-gray-700">
                <div>
                  <p>{datum.name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
