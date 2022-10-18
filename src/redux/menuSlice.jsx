import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hideMenu: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    hide: (state) => {
      state.hideMenu = true;
    },
    active: (state) => {
      state.hideMenu = false;
    },
  },
});

export const { hide, active } = menuSlice.actions;

export default menuSlice.reducer;
