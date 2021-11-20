import React from "react";
import { Link } from "react-router-dom";

export default function ProductsCards({ product }) {
  return (
    <div>
      <div className="rounded-md shadow-2xl overflow-hidden">
        <div
          style={{
            backgroundImage: "url(" + product.image + ")",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="h-48 w-48"
        ></div>
        <div className="flex flex-col justify-around items-center gap-2 bg-bgLight h-24 w-48">
          <h1 className="text-xs font-semibold  text-center">{product.name}</h1>
          <p className="text-xs text-center">$ {product.price}</p>
          <Link
            className=" mx-auto text-xs font-semibold text-center text-bgLight hover:scale-110 w-20 bg-actionBlue rounded"
            to={`/products/${product._id}`}
          >
            Details..
          </Link>
        </div>
      </div>
    </div>
  );
}
