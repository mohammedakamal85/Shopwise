import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.item.push(action.payload);
    },

    removefromcart: (state, action) => {
      state.item = state.item.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});
