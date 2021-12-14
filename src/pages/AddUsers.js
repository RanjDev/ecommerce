import React, { useState } from "react";
import { useAddUserMutation } from "../services/eCommerceAPI";

export default function AddUsers() {
  const [addUser, { data, error }] = useAddUserMutation();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userObject = {
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      email: inputs.email,
      password: inputs.password,
      role: inputs.role,
    };

    addUser(userObject);

    setInputs("");
  };

  return (
    <>
      <div>
        <p className="text-xl text-red-900 bg-red-200">
          {error ? `${error.data.error}` : ``}
        </p>
        <p className="text-xl text-blue-900 bg-blue-200 ">
          {data ? `${data.message}` : ``}
        </p>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          {/* <div className="md:col-span-1">
            <div className="m-4 ">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                New Product
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Insert a new product.
              </p>
            </div>
          </div> */}
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  {/* firstName */}
                  <div className="grid grid-cols-3 gap-6 ">
                    <div className="col-span-3 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          value={inputs.firstName || ""}
                          onChange={handleChange}
                          name="firstName"
                          id="firstName"
                          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Leonardo"
                        />
                      </div>
                    </div>
                  </div>
                  {/* lastName */}
                  <div className="grid grid-cols-3 gap-6 ">
                    <div className="col-span-3 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          value={inputs.lastName || ""}
                          onChange={handleChange}
                          name="lastName"
                          id="lastName"
                          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="DeCaprio"
                        />
                      </div>
                    </div>
                  </div>
                  {/* email */}
                  <div className="grid grid-cols-3 gap-6 ">
                    <div className="col-span-3 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="email"
                          value={inputs.email || ""}
                          onChange={handleChange}
                          name="email"
                          id="email"
                          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="leo@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  {/* password */}
                  <div className="grid grid-cols-3 gap-6 ">
                    <div className="col-span-3 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="password"
                          value={inputs.password || ""}
                          onChange={handleChange}
                          name="password"
                          id="password"
                          className="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Not 1234"
                        />
                      </div>
                      <p className="text-gray-600 text-sm my-1">
                        The password must be between 8-30 characters, and it
                        must contain at least one capital, number, and symbol.
                      </p>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Role:
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={inputs.role || ""}
                      onChange={handleChange}
                      autoComplete="category"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option className="hidden"></option>
                      <option className="" value="user">
                        user
                      </option>
                      <option className="" value="admin">
                        admin
                      </option>
                    </select>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                   text-white bg-blurTrust-light hover:bg-blurTrust-dark active:bg-blurTrust-darkest transition-all duration-300"
                  >
                    Add User
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
