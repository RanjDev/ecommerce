import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "../services/eCommerceAPI";

export const store = configureStore({
  reducer: {
    api: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
});
