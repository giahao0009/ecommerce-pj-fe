import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  content: null,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    toastSuccess: (state, action) => {
      state.content = action.payload;
      toast.success(state.content);
    },
    toastError: (state, action) => {
      state.content = action.payload;
      toast.error(state.content);
    },
  },
});

export const { toastSuccess, toastError } = toastSlice.actions;

export default toastSlice.reducer;
