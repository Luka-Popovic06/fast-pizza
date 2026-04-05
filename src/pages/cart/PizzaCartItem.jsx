import {
  removeAllOfPizza,
  removePizza,
  addPizza,
} from "../../redux/stor/cartSlice";
import { makeSelectPizzaQuantityByName } from "../../redux/selectors";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const PizzaCartItem = ({ name, price, removePizzaFromArray }) => {
  const dispatch = useDispatch();
  const pizzaQuantity = useSelector(makeSelectPizzaQuantityByName(name));

  const remove = (quantity) => {
    if (quantity <= 1) removePizzaFromArray(name);
  };

  return (
    <li>
      <p>{name}</p>
      <div className="cart__pizza-quantity-box">
        <p>{price} $</p>
        <Button
          btnType={"button"}
          variation={"secondary"}
          clickAction={() => {
            dispatch(removePizza(name));
            remove(pizzaQuantity);
          }}
        >
          -
        </Button>

        <p className="pizza-quantity">{pizzaQuantity}</p>
        <Button
          btnType={"button"}
          variation={"secondary"}
          clickAction={() =>
            dispatch(
              addPizza({
                name: name,
                price: price,
              }),
            )
          }
        >
          +
        </Button>
        <Button
          btnType={"button"}
          variation={"primary-medium"}
          clickAction={() => {
            dispatch(removeAllOfPizza(name));
            remove(0);
          }}
        >
          DELETE
        </Button>
      </div>
    </li>
  );
};
export default PizzaCartItem;
