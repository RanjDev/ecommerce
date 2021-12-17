import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const localToken = () => {
  try {
    const serializedState = localStorage.getItem("authToken");
    if (serializedState === null) {
      return "";
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const productsApiSlice = createApi({
  // when we attach this to our redux store, where are we keeping the data in the reducers
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    // baseUrl: "https://serene-eyrie-59879.herokuapp.com/",
    baseUrl: "http://localhost:5000/",
    // if the endpoint requires auth, you need to add header with your API key
    prepareHeaders(headers) {
      if (localToken()) {
        headers.set("authorization", `Bearer ${localToken()}`);
      }
      return headers;
    },
  }),
  // try to define the expected endpoints upfront as part of the structure
  tagTypes: ["Product"],
  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        query: () => "/products",
        providesTags: ["Product"],
      }),
      getProductById: builder.query({
        query: (id) => `/products/${id}`,
        providesTags: ["Product"],
      }),
      getCategories: builder.query({
        query: () => "/categories",
      }),
      getCompanies: builder.query({
        query: () => "/companies",
      }),
      addProduct: builder.mutation({
        query: (userObject) => ({
          url: "/products",
          method: "POST",
          body: userObject,
        }),
        invalidatesTags: ["Product"],
      }),
      addUser: builder.mutation({
        query: (userObject) => ({
          url: "/users",
          method: "POST",
          body: userObject,
        }),
      }),
      getUsers: builder.query({
        query: () => "/users",
      }),
      loginUser: builder.mutation({
        query: (userObject) => ({
          url: "/login",
          method: "POST",
          body: userObject,
        }),
      }),
      deleteProduct: builder.mutation({
        query: (id) => ({
          url: `/products/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Product"],
      }),
      updateProduct: builder.mutation({
        query: ({ id, ...rest }) => ({
          url: `/products/${id}`,
          method: "PUT",
          body: rest.prodObj,
        }),
        invalidatesTags: ["Product"],
      }),
      searchProducts: builder.query({
        query: (term) => `/search/${term}`,
      }),
    };
  },
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetCompaniesQuery,
  useLoginUserMutation,
  useAddProductMutation,
  useAddUserMutation,
  useGetUsersQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useSearchProductsQuery,
} = productsApiSlice;
