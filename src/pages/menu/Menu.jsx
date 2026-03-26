import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMenu } from "../../stor/api";
import PizzaItemCard from "./PizzaItemCard";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.username.name);
  const data = useSelector((state) => state.menu.menu);

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
    dispatch(fetchMenu());
  }, [name]);
  console.log(data);

  return (
    <ul className="pizza-list">
      {/**ovde id e lista pizza */}
      <PizzaItemCard />
    </ul>
  );
};
export default Menu;
