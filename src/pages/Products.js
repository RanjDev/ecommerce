import React from "react";
import { useGetProductsQuery } from "../services/eCommerceAPI";
import ProductsCards from "./components/ProductsCards";

export default function Products() {
  const { data, isLoading, error } = useGetProductsQuery();
  if (error) return <p>error</p>;
  if (isLoading) return <p>loading ...</p>;
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
