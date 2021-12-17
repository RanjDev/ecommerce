import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../services/eCommerceAPI";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import jwtDecode from "jwt-decode";

export default function AdminShowProducts() {
  const { data, isLoading, error } = useGetProductsQuery();
  const [deleteProduct, { data: succesDelete, error: delErr }] =
    useDeleteProductMutation();
  let navigate = useNavigate();

  const token = useSelector((state) => state.auth.user.token);
  const role = () => {
    if (token !== "") {
      const decodedToken = jwtDecode(token);
      return decodedToken.role;
    } else {
      return "";
    }
  };
  useEffect(() => {
    role() !== "admin" && navigate("/");
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.data.error}</p>;
  }
  if (data) {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {delErr ? delErr.data.error : ""}
              {succesDelete ? succesDelete.message : ""}
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((product) => (
                    <tr key={product.name}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="text-sm font-medium text-gray-900">
                              {product.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-64">
                            <div className="text-sm font-medium text-gray-900 truncate ">
                              {product.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.price}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded bg-green-100 text-green-800">
                          {product.quantity}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex  gap-2">
                          <NavLink
                            to={`/update-products/${product._id}`}
                            className="p-2 bg-blurTrust-light text-white rounded hover:bg-blurTrust-dark"
                          >
                            Edit
                          </NavLink>
                          <button
                            onClick={() => {
                              deleteProduct(product._id);
                            }}
                            className="p-2 bg-warningRed text-white rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
