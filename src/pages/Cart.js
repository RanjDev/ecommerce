import React from "react";
import { useSelector } from "react-redux";
import ProductsCards from "../pages/components/ProductsCards";

export default function Cart() {
  const cart = useSelector((state) => state.cart.carts);

  var checkOutPrice = 0;
  return (
    <div>
      <div className="flex flex-wrap m-8 gap-8 justify-center items-center">
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
        <p
          className="font-semibold text-2xl border-b hover:shadow-2xl hover:bg-goldenBalance-extraLight p-2 rounded-lg
        transition-all duration-300 cursor-default"
        >
          Total: ${checkOutPrice.toFixed(2)}
        </p>
        <button
          className="bg-blurTrust-light text-goldenBalance-extraLight px-4 py-2 rounded-lg shadow-md hover:shadow-xl
          transition-all duration-300 hover:bg-blurTrust-dark active:bg-blurTrust-darkest"
          onClick={() => {
            console.log("CheckOut button clicked");
          }}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
