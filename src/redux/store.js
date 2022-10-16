import { configureStore } from "@reduxjs/toolkit";
import { tableReducer } from "./slices/tableSlice";

const store = configureStore({
  reducer: {
    tablePage: tableReducer,
  },
});

export default store;
