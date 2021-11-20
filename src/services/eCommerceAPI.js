import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  // when we attach this to our redux store, where are we keeping the data in the reducers
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://serene-eyrie-59879.herokuapp.com/",
    // if the endpoint requires auth, you need to add header with your API key
    /* prepareHeaders(headers){ 
      headers.set('x-api-key', your-api-key)
      return headers;
    } */
  }),
  // try to define the expected endpoints upfront as part of the structure
  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        query: () => "/products",
      }),
      getProductById: builder.query({
        query: (id) => `products/${id}`,
      }),
      getCategories: builder.query({
        query: () => "/categories",
      }),
      //   registerUser: builder.mutation({
      //     query: (userObject) => ({
      //       url: "/register",
      //       method: "POST",
      //       body: userObject,
      //     }),
      //   }),
      //   loginUser: builder.mutation({
      //     query: (userObject) => ({
      //       url: "/login",
      //       method: "POST",
      //       body: userObject,
      //     }),
      //   }),
    };
  },
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
} = productsApiSlice;
