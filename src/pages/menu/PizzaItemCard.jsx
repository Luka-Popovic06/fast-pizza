import Button from "../../components/Button";
const PizzaItemCard = () => {
  return (
    <li className="pizza-list__item">
      <img src="pizza.png" alt="pizza" className="pizza-img" />
      <p className="pizza-name">Margherita</p>
      <p className="pizza-ingredients">tomato, mozzarella, basil</p>
      <p className="pizza-price">12$</p>
      <Button btnType={"button"} variation={"primary-medium"}>
        ADD TO CART
      </Button>
    </li>
  );
};
export default PizzaItemCard;
