import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import PizzaCartItem from "./PizzaCartItem";
import { clearCart } from "../../redux/stor/cartSlice";
const Cart = () => {
  const name = useSelector((state) => state.username.name);
  const selectPizzas = useSelector((state) => state.cart.pizzas);
  const [pizzasNamesArray, setPizzaNamesArray] = useState([]);
  const dispatch = useDispatch();

  console.log(selectPizzas);

  const usePizzasInfo = () => {
    let pizzasNamesArray = [];
    for (const pizzaName in selectPizzas) {
      pizzasNamesArray.push({
        name: pizzaName,
        price: selectPizzas[pizzaName][0],
      });
    }
    return pizzasNamesArray;
  };
  const removePizza = (name) => {
    setPizzaNamesArray((prev) => prev.filter((pizza) => pizza.name !== name));
  };

  useEffect(() => {
    setPizzaNamesArray(usePizzasInfo());
  }, []);

  console.log(pizzasNamesArray);

  return (
    <main className="cart">
      <div className="cart__box">
        <NavLink to={"/menu"}>
          <FaArrowLeftLong /> Back to menu
        </NavLink>
        <h3>Your cart, {name}</h3>
      </div>
      <ul>
        {pizzasNamesArray.map((pizza, index) => (
          <PizzaCartItem
            key={index}
            name={pizza.name}
            price={pizza.price}
            removePizzaFromArray={(name) => removePizza(name)}
          />
        ))}
      </ul>
      <div className="cart__link-box">
        <NavLink className={"set-order"}>SET ORDER</NavLink>
        <button
          className={"clear-cart"}
          onClick={() => {
            dispatch(clearCart());
            setPizzaNamesArray([]);
          }}
        >
          CLEAR CART
        </button>
      </div>
    </main>
  );
};
export default Cart;
