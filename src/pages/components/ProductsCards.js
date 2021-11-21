import React from "react";
import { Link } from "react-router-dom";
import { BsCartPlusFill, BsCartDashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cartSlice";

export default function ProductsCards({ product }) {
  const cart = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="rounded-md shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-200">
        <Link
          className=" mx-auto text-xs font-semibold text-center text-bgLight hover:scale-110 w-20 bg-actionBlue rounded"
          to={`/products/${product._id}`}
        >
          <div
            style={{
              backgroundImage: "url(" + product.image + ")",
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="h-48 w-48"
          ></div>
        </Link>
        <div className="flex flex-col justify-around items-center gap-2 bg-bgLight h-24 w-48">
          <h1 className="text-xs font-semibold  text-center">{product.name}</h1>
          <p className="text-xs text-center">$ {product.price}</p>

          {cart.includes(product) ? (
            <BsCartDashFill
              className="text-red-600 text-2xl shadow-xl mb-2"
              onClick={() => {
                dispatch(removeFromCart(product._id));
              }}
            />
          ) : (
            <BsCartPlusFill
              className="text-actionBlue text-xl shadow-2xl mb-2"
              onClick={() => {
                dispatch(addToCart(product));
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
