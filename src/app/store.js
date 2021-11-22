import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import cartSlice from "../features/cartSlice";
import { productsApiSlice } from "../services/eCommerceAPI";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    api: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
});
