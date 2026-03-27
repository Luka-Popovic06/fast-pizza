import Button from "../../components/Button";
const PizzaItemCard = ({ img, name, price, ingredients }) => {
  return (
    <li className="pizza-list__item">
      <img src={img} alt={`${name}-img`} className="pizza-img" />
      <div className="pizza-list__info">
        <div>
          <p>{name}</p>
          <p className="pizza-ingredients">{ingredients.join(", ")}</p>
        </div>
        <p>{price}</p>
      </div>

      <Button btnType={"button"} variation={"primary-medium"}>
        ADD TO CART
      </Button>
    </li>
  );
};
export default PizzaItemCard;
