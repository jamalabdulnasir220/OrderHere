import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: false,
    logInBtn: "Login",
  },
  reducers: {
    showLogin: (state) => {
      if (state.logInBtn === "Login") {
        state.login = true;
      }
    },
    hideLogin: (state) => {
      state.login = false;
    },
    toggleLogInBtn: (state) => {
      state.logInBtn = "Logout";
    },
    turnToLogin: (state) => {
      state.logInBtn = "Login";
    },
  },
});

export const { showLogin, hideLogin, toggleLogInBtn, turnToLogin } =
  loginSlice.actions;

export default loginSlice.reducer;
