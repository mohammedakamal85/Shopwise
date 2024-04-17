import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./Cartslice";

const store = configureStore({
  reducer: {
    cart : cartSlice.reducer
  },
});

export default store;
