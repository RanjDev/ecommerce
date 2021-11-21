import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import { productsApiSlice } from "../services/eCommerceAPI";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    api: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
});
