import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import {
  addPizza,
  removePizza,
  removeAllOfPizza,
} from "../../redux/stor/cartSlice";
import { useSelector } from "react-redux";
import {
  selectPizzaQuantityByName,
  selectTotalPriceOfPizzas,
} from "../../redux/selectors";

const PizzaItemCard = ({ img, name, price, ingredients, soldOut }) => {
  const dispatch = useDispatch();
  const pizzaQuantity = useSelector((state) =>
    selectPizzaQuantityByName(state, name),
  );

  return (
    <li className="pizza-list__item">
      <img
        src={img}
        alt={`${name}-img`}
        className={`pizza-img ${soldOut && "pizza-img-sold"}`}
      />
      <div className="pizza-info-box">
        <div className="pizza-details">
          <p>{name}</p>
          <p className="pizza-ingredients">{ingredients.join(", ")}</p>
        </div>
        {pizzaQuantity > 0 && (
          <div className="pizza-quantity-box">
            <Button
              btnType={"button"}
              variation={"secondary"}
              clickAction={() => dispatch(removePizza(name))}
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
              clickAction={() => dispatch(removeAllOfPizza(name))}
            >
              DELETE
            </Button>
          </div>
        )}
      </div>
      {!soldOut ? (
        <p
          className="pizza-price"
          style={
            pizzaQuantity > 0
              ? { gridColumn: "3/4", gridRow: "1/2", alignSelf: "flex-end" }
              : { gridColumn: "2/3", gridRow: "2/3" }
          }
        >
          {price.toFixed(2)} $
        </p>
      ) : (
        <p
          className="pizza-price"
          style={{ gridColumn: "2/3", gridRow: "2/3" }}
        >
          SOLD OUT
        </p>
      )}
      {!pizzaQuantity && !soldOut && (
        <Button
          btnType={"button"}
          variation={"primary-medium"}
          clickAction={() => dispatch(addPizza({ name: name, price: price }))}
        >
          ADD TO CART
        </Button>
      )}
    </li>
  );
};
export default PizzaItemCard;
