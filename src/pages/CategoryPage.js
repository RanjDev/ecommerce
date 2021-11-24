import React from "react";
import { useParams } from "react-router";
import { useGetProductsQuery } from "../services/eCommerceAPI";
import Loading from "./components/Loading";
import ProductCards from "./components/ProductsCards";
import ErrorDataNotLoaded from "./components/ErrorDataNotLoaded";

export default function CategoryPage() {
  const { name } = useParams();
  const { data, isLoading, error } = useGetProductsQuery();
  if (error) return <ErrorDataNotLoaded error={error} />;
  if (isLoading) return <Loading />;
  if (data) {
    return (
      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {data.map((datum, index) => {
          if (datum.category === name) {
            return <ProductCards product={datum} key={index} />;
          } else {
            return "";
          }
        })}
      </div>
    );
  }
}
