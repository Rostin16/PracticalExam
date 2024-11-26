import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/Products/ProSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
