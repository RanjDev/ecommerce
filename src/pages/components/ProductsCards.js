import React from "react";
import { Link } from "react-router-dom";
import { BsCartPlusFill, BsCartDashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cartSlice";

export default function ProductsCards({ product, index }) {
  const cart = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  const cartProducts = [];
  function getCart() {
    cart.forEach((prod) => {
      return cartProducts.push(prod._id);
    });
  }

  getCart();
  return (
    <div className="">
      <div className="group rounded-md shadow-2xl overflow-hidden hover:-m-4 hover:p-4  bg-goldenBalance-extraLight transition-all duration-300 ">
        <Link
          className=" mx-auto text-xs font-semibold text-center w-20  rounded"
          to={`/products/${product._id}`}
        >
          <div
            style={{
              backgroundImage: "url(" + product.image + ")",
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="h-48 w-48 "
          ></div>
        </Link>
        <div className="flex flex-col justify-around items-center gap-2 bg-goldenBalance-extraLight h-20 w-48">
          <h1 className="text-xs font-semibold  text-center">{product.name}</h1>
          <div className="flex items-center gap-16">
            <p className="text-md text-center">$ {product.price}</p>

            {cartProducts.includes(product._id) ? (
              <BsCartDashFill
                className="text-red-600 hover:text-red-800 active:text-red-900 cursor-pointer text-xl mb-2 transition-all duration-500 "
                onClick={() => {
                  dispatch(removeFromCart(product._id));
                }}
              />
            ) : (
              <BsCartPlusFill
                className="text-blurTrust-light hover:text-blurTrust-dark active:text-blurTrust-darkest cursor-pointer text-xl  mb-2 transition-all duration-500 "
                onClick={() => {
                  dispatch(addToCart(product));
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
