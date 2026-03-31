import { createSelector } from "@reduxjs/toolkit";

export const selectPizzaQuantityByName = createSelector(
  [(state) => state.cart.pizzas, (state, pizzaName) => pizzaName],
  (pizzas, name) => pizzas[name]?.length,
);
export const selectTotalPizzasQuantity = createSelector(
  (state) => state.cart.pizzas,
  (pizzas) => {
    let totalQuantity = 0;
    for (const pizzaName in pizzas) {
      const pizzaArray = pizzas[pizzaName];
      totalQuantity += pizzaArray.length;
    }
    return totalQuantity;
  },
);
