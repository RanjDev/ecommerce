import React from "react";
import HeroSlider from "./HeroSlider";
import Categories from "./Categories";
import { useGetProductsQuery } from "../../services/eCommerceAPI";

export default function Home() {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <p>isLoading ...</p>;
  }
  if (error) {
    return <p>error happened</p>;
  }
  if (data)
    return (
      <div className="">
        <p>Home Componenet</p>
        {data.map(
          (datum, index) => index < 5 && <HeroSlider product={datum} />
        )}
        <Categories />;
      </div>
    );
}
