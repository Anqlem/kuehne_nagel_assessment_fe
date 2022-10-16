import { createSlice } from "@reduxjs/toolkit";
import orders from "../../data/Shipments.json";

const initialState = {
  data: {
    orders,
  },
};

const tableSlice = createSlice({
  name: "tablePage",
  initialState,
  reducers: {
    removeElement: (state = initialState, action) => ({
      ...state,
      data: {
        orders: state.data.orders.filter(
          (order) => order.orderNo !== action.payload
        ),
      },
    }),
  },
});

export const { removeElement } = tableSlice.actions;

export const tableReducer = tableSlice.reducer;
