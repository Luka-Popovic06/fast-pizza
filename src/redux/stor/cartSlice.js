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
      if (state.pizzas[action.payload].length === 0) {
        delete state.pizzas[action.payload];
      }
    },
    removeAllOfPizza: (state, action) => {
      state.pizzas[action.payload] = [];
      if (state.pizzas[action.payload].length === 0) {
        delete state.pizzas[action.payload];
      }
    },
    clearCart: (state) => {
      state.pizzas = {};
    },
  },
});
export const { addPizza, removePizza, removeAllOfPizza, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
