import { createSelector } from "@reduxjs/toolkit";

export const selectPizzaQuantityByName = createSelector(
  [(state) => state.cart.pizzas, (state, pizzaName) => pizzaName],
  (pizzas, name) => pizzas[name]?.length,
);
