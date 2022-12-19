import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrders: (state, action) => {
      state.orders = action.payload;
    },
    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const { getOrders, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
