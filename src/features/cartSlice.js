import { createSlice } from "@reduxjs/toolkit";

const localData = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

console.log(localData());

const initialState = {
  carts: [...localData()],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.carts.push(action.payload);
      state.carts = [...state.carts, action.payload];

      localStorage.setItem("cart", JSON.stringify(state.carts));
    },
    removeFromCart: (state, action) => {
      state.carts.map((product, index) => {
        if (product._id === action.payload) {
          return (
            state.carts.splice(index, 1) &&
            localStorage.setItem("cart", JSON.stringify(state.carts))
          );
        } else {
          return "";
        }
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
