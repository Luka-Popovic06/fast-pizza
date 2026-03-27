import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMenu } from "../../stor/api";
import PizzaItemCard from "./PizzaItemCard";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.username.name);
  const pizzaData = useSelector((state) => state.menu.menu);

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
    dispatch(fetchMenu());
  }, [name]);
  console.log(pizzaData);

  return (
    <ul className="pizza-list">
      {pizzaData?.data?.map((pizza) => (
        <PizzaItemCard
          key={pizza.id}
          img={pizza?.imageUrl}
          price={pizza?.unitPrice}
          name={pizza?.name}
          ingredients={pizza?.ingredients}
        />
      ))}
    </ul>
  );
};
export default Menu;
