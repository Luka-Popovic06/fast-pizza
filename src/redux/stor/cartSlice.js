import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    pizzas: {},
  },
  reducers: {
    addPizza: (state, action) => {
      const { name, price } = action.payload;

      if (!state.pizzas[name]) {
        state.pizzas[name] = [];
      }

      state.pizzas[name].push(price);
    },
    removePizza: (state, action) => {
      state.pizzas[action.payload].pop();
    },
    removeAllOfPizza: (state, action) => {
      state.pizzas[action.payload] = [];
    },
  },
});
export const { addPizza, removePizza, removeAllOfPizza } = cartSlice.actions;
export default cartSlice.reducer;
