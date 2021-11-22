import { createSlice } from "@reduxjs/toolkit";

//TODO: also add to the localstorage

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
    logOut: (state) => {
      state.user = {};
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
