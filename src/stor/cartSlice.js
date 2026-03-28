import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    price: 0,
  },
  reducers: {
    addPizza: (state, action) => {
      state.price = action.payload;
    },
    removePizza: (state, action) => {
      state.price = state.price - action.payload;
    },
  },
});
export const { addPizza, removePizza } = cartSlice.actions;
export default cartSlice.reducer;
