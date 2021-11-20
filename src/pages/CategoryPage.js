import React from "react";
import { useParams } from "react-router";
import { useGetProductsQuery } from "../services/eCommerceAPI";
import ProductCards from "./components/ProductsCards";

export default function CategoryPage() {
  const { name } = useParams();
  const { data, isLoading, error } = useGetProductsQuery();
  if (error) return <p>error</p>;
  if (isLoading) return <p>loading ...</p>;
  if (data) {
    return (
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {data.map((datum) => {
          if (datum.category === name) {
            return <ProductCards product={datum} />;
          } else {
            return "";
          }
        })}
      </div>
    );
  }
}
