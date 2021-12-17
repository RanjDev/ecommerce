import { React, useState, useEffect } from "react";
import {
  useGetCompaniesQuery,
  useGetCategoriesQuery,
  useAddProductMutation,
} from "../services/eCommerceAPI";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import jwtDecode from "jwt-decode";

export default function AddProduct() {
  const [inputs, setInputs] = useState({});
  const [image, setImage] = useState("");

  let navigate = useNavigate();

  const [addProduct, { data: addProductSuccess, error: addProductError }] =
    useAddProductMutation();

  const {
    data: companyData,
    error: getCompanyError,
    isLoading: companyLoading,
  } = useGetCompaniesQuery();
  const {
    data: categoryData,
    error: getCategoryError,
    isLoading: categoryLoading,
  } = useGetCategoriesQuery();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const productObject = {
    //   name: inputs.productName,
    //   price: inputs.price,
    //   description: inputs.productDescription,
    //   quantity: inputs.quantity,
    //   company: inputs.company,
    //   category: inputs.category,
    // };

    const data = new FormData();
    data.append("name", inputs.productName);
    data.append("price", inputs.price);
    data.append("description", inputs.productDescription);
    data.append("quantity", inputs.quantity);
    data.append("company", inputs.company);
    data.append("category", inputs.category);

    data.append("image", image);

    addProduct(data);
    // addProduct(productObject);

    // setImage("");
    setInputs("");
  };

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

  if (getCompanyError) {
    return <p> {JSON.stringify(getCompanyError)}</p>;
  }
  if (getCategoryError) {
    return <p>{JSON.stringify(getCategoryError)}</p>;
  }

  if (companyData && categoryData) {
    return (
      <>
        <div>
          <p className="text-xl text-red-900 bg-red-200">
            {addProductError ? `${addProductError.data.error}` : ``}
          </p>
          <p className="text-xl text-blue-900 bg-blue-200 ">
            {addProductSuccess ? `${addProductSuccess.message}` : ``}
          </p>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="m-4 ">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  New Product
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Insert a new product.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6 ">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="product-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Product Name
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            value={inputs.productName || ""}
                            onChange={handleChange}
                            name="productName"
                            id="product-name"
                            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="1kg flour 12pcs"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="description"
                          value={inputs.productDescription || ""}
                          onChange={handleChange}
                          name="productDescription"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="A carton of 12 pcs of 1kg flour bags"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your product.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-6 ">
                      <div className="col-span-3 sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Product Price
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="number"
                            value={inputs.price || ""}
                            step="0.1"
                            onChange={handleChange}
                            name="price"
                            id="product-price"
                            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="28.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 ">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="product-quantity"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Product Quantity
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="number"
                            value={inputs.quantity || ""}
                            onChange={handleChange}
                            name="quantity"
                            id="product-quantity"
                            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="3"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company
                      </label>
                      <select
                        id="company"
                        name="company"
                        value={inputs.company || ""}
                        onChange={handleChange}
                        autoComplete="company"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option className="hidden"></option>
                        {companyData.map((company) => {
                          return (
                            <option value={company.name}>{company.name}</option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={inputs.category || ""}
                        onChange={handleChange}
                        autoComplete="category"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option className="hidden"></option>
                        {categoryData.map((category) => {
                          return (
                            <option value={category.name}>
                              {category.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Product Photo
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="image"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              {/* <span>Upload a file</span> */}
                              <input
                                id="image"
                                name="image"
                                type="file"
                                onChange={(event) => {
                                  const file = event.target.files[0];
                                  setImage(file);
                                }}
                                // className="sr-only "
                              />
                            </label>
                            {/* <p className="pl-1">or drag and drop</p> */}
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                     text-white bg-blurTrust-light hover:bg-blurTrust-dark active:bg-blurTrust-darkest transition-all duration-300"
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  } else if (companyLoading || categoryLoading) {
    return <p>Loading form...</p>;
  }
}
