import React from "react";
import { useGetProductsQuery } from "../services/eCommerceAPI";
import ErrorDataNotLoaded from "./components/ErrorDataNotLoaded";
import Loading from "./components/Loading";
import ProductsCards from "./components/ProductsCards";

export default function Products() {
  const { data, isLoading, error } = useGetProductsQuery();

  if (error)
    return (
      <ErrorDataNotLoaded error={error} />
      // {error.status} {JSON.stringify(error.data)}
    );
  if (isLoading) return <Loading />;
  if (data) {
    return (
      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {data.map((datum, index) => {
          return <ProductsCards product={datum} key={index} />;
        })}
      </div>
    );
  }
}
