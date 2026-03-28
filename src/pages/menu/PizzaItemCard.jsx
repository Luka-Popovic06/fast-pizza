import Button from "../../components/Button";
import { useState } from "react";
const PizzaItemCard = ({ img, name, price, ingredients }) => {
  const [num, setNum] = useState(0);
  console.log(num);
  return (
    <li className="pizza-list__item">
      <img src={img} alt={`${name}-img`} className="pizza-img" />
      <div className="pizza-info-box">
        <div className="pizza-details">
          <p>{name}</p>
          <p className="pizza-ingredients">{ingredients.join(", ")}</p>
        </div>
        {num === 1 && (
          <div className="pizza-quantity-box">
            <Button btnType={"button"} variation={"secondary"}>
              +
            </Button>
            <p className="pizza-quantity">2</p>
            <Button btnType={"button"} variation={"secondary"}>
              -
            </Button>
            <Button
              btnType={"button"}
              variation={"primary-medium"}
              clickAction={() => setNum(0)}
            >
              DELETE
            </Button>
          </div>
        )}
      </div>
      {
        <p
          className="pizza-price"
          style={
            num === 1
              ? { gridColumn: "3/4", gridRow: "1/2", alignSelf: "flex-end" }
              : { gridColumn: "2/3", gridRow: "2/3" }
          }
        >
          {price.toFixed(2)} $
        </p>
      }
      {num === 0 && (
        <Button
          btnType={"button"}
          variation={"primary-medium"}
          clickAction={() => setNum(1)}
        >
          ADD TO CART
        </Button>
      )}
    </li>
  );
};
export default PizzaItemCard;
