import React from "react";
import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../services/eCommerceAPI";
import Loading from "./components/Loading";
import ErrorDataNotLoaded from "./components/ErrorDataNotLoaded";
import { useDispatch, useSelector } from "react-redux";
import { BsCartPlusFill, BsCartDashFill } from "react-icons/bs";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

export default function ProductDetailPage() {
  const { details } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(details);

  const cart = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  const cartProducts = [];
  function getCart() {
    cart.forEach((prod) => {
      return cartProducts.push(prod._id);
    });
  }
  getCart();

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorDataNotLoaded error={error} />;
  }
  if (data) {
    return (
      <div>
        <div className="flex items-center justify-center w-full h-auto -my-8">
          <div className="flex flex-col md:flex-row md:justify-center items-center p-2 gap-2 mt-8 w-full h-auto ">
            <div className="flex justify-center items-center w-1/2 lg:w-1/3">
              <img
                src={data.image}
                alt="the product"
                className="h-72 rounded"
              />
            </div>
            <div className="flex flex-col justify-center items-center p-8 w-1/2 lg:w-1/3">
              <p className="text-center text-lg font-bold uppercase p-2">
                {data.name}
              </p>
              <p className="text-center text-sm font-normal ">
                {data.description}
              </p>
              <div className="flex gap-8 items-center justify-center shadow-lg rounded-md p-2 m-8">
                <p className="text-center text-lg font-semibold">
                  Price: ${data.price}
                </p>
                <p className="text-center text-lg font-semibold ">
                  Quantity: {data.quantity}
                </p>
              </div>
              {cartProducts.includes(data._id) ? (
                <BsCartDashFill
                  className="text-red-600 hover:text-red-800 active:text-red-900 cursor-pointer text-4xl mb-2 transition-all duration-500 "
                  onClick={() => {
                    dispatch(removeFromCart(data._id));
                  }}
                />
              ) : (
                <BsCartPlusFill
                  className="text-blurTrust-light hover:text-blurTrust-dark active:text-blurTrust-darkest cursor-pointer text-4xl  mb-2 transition-all duration-500 "
                  onClick={() => {
                    dispatch(addToCart(data));
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 m-16 text-right ">
          <Link
            className="bg-indigo-600 text-white p-2 rounded w-auto"
            to={`/category/${data.category.name}`}
          >
            More like {data.category.name}
          </Link>
          <Link
            className="bg-indigo-600 text-white p-2 rounded"
            to={`/company/${data.company.name}`}
          >
            More from {data.company.name}
          </Link>
        </div>
      </div>
    );
  }
}
