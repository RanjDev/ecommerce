import React from "react";
import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../services/eCommerceAPI";

export default function ProductDetailPage() {
  const { details } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(details);

  if (isLoading) {
    return <p>loading....</p>;
  }
  if (error) {
    return <p>error</p>;
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
