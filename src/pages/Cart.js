import React from "react";
import { useSelector } from "react-redux";
import ProductsCards from "../pages/components/ProductsCards";

export default function Cart() {
  const cart = useSelector((state) => state.cart.carts);
  return (
    <div className="flex flex-wrap m-4 gap-4 justify-center items-center">
      {cart.map((product) => {
        return <ProductsCards product={product} />;
      })}
    </div>
  );
}
