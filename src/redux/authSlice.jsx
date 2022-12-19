import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    currentUser: null,
    isFetching: false,
    error: false,
    userInfo: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    // Logout
    logoutStart: (state) => {
      state.login.isFetching = true;
      state.login.error = false;
    },
    logoutSuccess: (state) => {
      state.login.isFetching = false;
      state.login.currentUser = null;
      state.login.error = false;
    },
    logoutFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    getInfo: (state, action) => {
      state.login.userInfo = action.payload;
    },
  },
});

export const {
  loginStart,
  loginFailed,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailed,
  getInfo,
} = authSlice.actions;

export default authSlice.reducer;
