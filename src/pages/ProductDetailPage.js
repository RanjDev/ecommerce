import React from "react";
import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../services/eCommerceAPI";
import Loading from "./components/Loading";
import ErrorDataNotLoaded from "./components/ErrorDataNotLoaded";

export default function ProductDetailPage() {
  const { details } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(details);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorDataNotLoaded error={error} />;
  }
  if (data) {
    return (
      <div>
        <img src={data.image} alt="the product" className="h-72" />
        <p>{data.name}</p>
      </div>
    );
  }
}
