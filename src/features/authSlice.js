import { createSlice } from "@reduxjs/toolkit";

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

const initialState = {
  user: {
    token: localToken(),
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user.token = action.payload;
      localStorage.setItem("authToken", JSON.stringify(state.user.token));
    },
    logOut: (state) => {
      state.user.token = "";
      localStorage.setItem("authToken", JSON.stringify(state.user.token));
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
