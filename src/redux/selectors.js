import { createSelector } from "@reduxjs/toolkit";

export const makeSelectPizzaQuantityByName = (name) => {
  return createSelector(
    [(state) => state.cart.pizzas],
    (pizzas) => pizzas[name]?.length,
  );
};

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

export const selectTotalPriceOfPizzas = createSelector(
  [(state) => state.cart.pizzas],
  (pizzas) => {
    let totalPrice = 0;
    for (const pizzaName in pizzas) {
      const pizzasArray = pizzas[pizzaName];
      totalPrice += pizzasArray.reduce(
        (total, currentValue) => (total += currentValue),
        0,
      );
    }
    return totalPrice;
  },
);
