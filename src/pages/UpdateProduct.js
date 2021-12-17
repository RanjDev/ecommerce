import React, { useState, useEffect } from "react";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
  // useGetCategoriesQuery,
  // useGetCompaniesQuery,
} from "../services/eCommerceAPI";
import { useParams, useNavigate } from "react-router";

export default function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error, isLoading } = useGetProductByIdQuery(id);

  const [updatePost, { data: d, error: err }] = useUpdateProductMutation();

  // const { data: companyData, error: getCompanyError } = useGetCompaniesQuery();
  // const { data: categoryData, error: getCategoryError } =
  //   useGetCategoriesQuery();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((oldState) => ({ ...oldState, [name]: value }));
  };

  const [inputs, setInputs] = useState({});

  useEffect(() => {
    data &&
      setInputs({
        name: data?.name,
        description: data?.description,
        price: data?.price,
        quantity: data?.quantity,
        //   // company: data?.company,
        //   // category: data?.category,
      });
  }, [data]);

  useEffect(() => {
    d && navigate(`/products/${id}`);
  }, [d]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const prodObj = {
      name: inputs.name,
      description: inputs.description,
      price: inputs.price,
      quantity: inputs.quantity,
      // company: inputs.company,
      // category: inputs.category,
    };

    // console.log(prodObj);
    updatePost({ id, prodObj });
  };
  if (data) {
    return (
      <>
        <div>
          <p className="text-xl text-red-900 bg-red-200">
            {err ? err.data.error : ``}
          </p>
          <p className="text-xl text-red-900 bg-red-200">
            {error ? error.data.error : ``}
          </p>
          {/* <p className="text-xl text-red-900 bg-red-200">
            {getCategoryError ? getCategoryError.data.error : ``}
          </p>{" "}
          <p className="text-xl text-red-900 bg-red-200">
            {getCompanyError ? getCompanyError.data.error : ``}
          </p> */}
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6 ">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Product Name
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            value={inputs.name || data?.name}
                            onChange={handleChange}
                            name="name"
                            id="name"
                            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
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
                          value={inputs.description}
                          onChange={handleChange}
                          name="description"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
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
                            value={inputs.price}
                            step="0.1"
                            onChange={handleChange}
                            name="price"
                            id="price"
                            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
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
                            value={inputs.quantity}
                            onChange={handleChange}
                            name="quantity"
                            id="product-quantity"
                            className="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="3"
                          />
                        </div>
                      </div>
                    </div>

                    {/* <div className="col-span-6 sm:col-span-3">
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
                        {companyData?.map((company) => {
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
                        {categoryData?.map((category) => {
                          return (
                            <option value={category.name}>
                              {category.name}
                            </option>
                          );
                        })}
                      </select>
                    </div> */}
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                     text-white bg-blurTrust-light hover:bg-blurTrust-dark active:bg-blurTrust-darkest transition-all duration-300"
                    >
                      Update Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
