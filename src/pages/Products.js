import React from "react";
import { useGetProductsQuery } from "../services/eCommerceAPI";

export default function Products() {
  const { data, isLoading, error } = useGetProductsQuery();
  if (error) return <p>error</p>;
  if (isLoading) return <p>loading ...</p>;
  if (data) {
    return (
      <div>
        <p>
          {data.map((datum) => {
            return <p>{datum.name}</p>;
          })}
        </p>
      </div>
    );
  }
}
