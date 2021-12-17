import React, { useState, useEffect } from "react";
import {
  useGetProductsQuery,
  useSearchProductsQuery,
} from "../services/eCommerceAPI";
// import ErrorDataNotLoaded from "./components/ErrorDataNotLoaded";
import Loading from "./components/Loading";
import ProductsCards from "./components/ProductsCards";

export default function Products() {
  const { data, isLoading, error } = useGetProductsQuery();

  const [inputs, setInputs] = useState("");

  const {
    data: SearchData,
    isLoading: searchLoading,
    error: searchError,
  } = useSearchProductsQuery(inputs);

  if (error) return <p>{error.data.error}</p>;

  if (isLoading) return <Loading />;
  if (searchLoading) return <Loading />;
  if (data) {
    return (
      <div>
        <div className="flex justify-between items-center">
          <div>
            <p className=" ml-20 mt-8 font-semibold">
              Choose from our products:
            </p>
            <p className=" ml-20  font-light text-gray-600">
              Add the chosen products to the Cart, then check it out
            </p>
          </div>
          <div className="mr-20">
            {/* Search Form*/}
            <div
              className="mt-8  flex justify-center items-center"
              // onSubmit={(e) => {
              //   e.preventDefault();
              // }}
            >
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <input
                    id="term"
                    name="term"
                    type="text"
                    value={inputs}
                    onChange={(event) => {
                      // console.log(event.target.value);
                      setInputs(event.target.value);
                    }}
                    placeholder="Search Term..."
                    className="appearance-none rounded-l relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  // type="submit"
                  onClick={() => {
                    setInputs("");
                  }}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-r
                 text-white bg-blurTrust-light hover:bg-blurTrust-dark active:bg-blurTrust-darkest transition-all duration-300"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
        {SearchData && !searchError ? (
          <div className="flex flex-wrap justify-center gap-16 mt-4 ">
            {SearchData?.map((datum, index) => {
              return <ProductsCards product={datum} key={index} />;
            })}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-16 mt-4 ">
            {data?.map((datum, index) => {
              return <ProductsCards product={datum} key={index} />;
            })}
          </div>
        )}
      </div>
    );
  }
}
