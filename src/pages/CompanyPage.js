import React from "react";
import { useParams } from "react-router";
import { useGetProductsQuery } from "../services/eCommerceAPI";
import Loading from "./components/Loading";
import ProductCards from "./components/ProductsCards";

export default function CompanyPage() {
  const { name } = useParams();
  const { data, isLoading, error } = useGetProductsQuery();
  if (error) return <p>{error.data.error}</p>;
  if (isLoading) return <Loading />;
  if (data) {
    return (
      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {data.map((datum, index) => {
          if (datum.company.name === name) {
            return <ProductCards product={datum} key={index} />;
          } else {
            return "";
          }
        })}
      </div>
    );
  }
}
