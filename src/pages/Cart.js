import React from "react";
import { useSelector } from "react-redux";
import ProductsCards from "../pages/components/ProductsCards";

export default function Cart() {
  const cart = useSelector((state) => state.cart.carts);

  var checkOutPrice = 0;
  return (
    <div>
      <div className="flex flex-wrap m-4 gap-4 justify-center items-center">
        {cart.map((product, index) => {
          checkOutPrice += product.price;
          return (
            <div>
              <ProductsCards product={product} key={index} index={index} />
            </div>
          );
        })}
      </div>
      <div className="flex gap-16 items-center justify-center p-8 ">
        <p className="font-semibold text-2xl border-b-2 hover:shadow-2xl hover:bg-gray-200 p-2 rounded-lg">
          Total: ${checkOutPrice}
        </p>
        <button
          className="border bg-actionBlue text-bgLight p-4 rounded-lg shadow-lg hover:shadow-2xl hover:text-gray-300"
          onClick={() => {
            alert("da ba 3aidy xoman be?");
          }}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
