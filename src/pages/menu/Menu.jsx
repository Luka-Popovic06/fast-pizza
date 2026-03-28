import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMenu } from "../../stor/api";
import PizzaItemCard from "./PizzaItemCard";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectName = useSelector((state) => state.username.name);
  const selectPizzaData = useSelector((state) => state.menu.menu);

  useEffect(() => {
    if (!selectName) {
      navigate("/");
    }
    dispatch(fetchMenu());
  }, [selectName]);
  console.log(selectPizzaData);

  return (
    <ul className="pizza-list">
      {selectPizzaData?.data?.map((pizza) => (
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
