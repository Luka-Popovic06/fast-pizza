import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { data, useNavigate } from "react-router-dom";
import { fetchMenu } from "../../redux/api/api";
import PizzaItemCard from "./PizzaItemCard";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectName = useSelector((state) => state.username.name);
  const selectPizzaData = useSelector((state) => state.menu.menu);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!selectName) {
      navigate("/");
    }
    dispatch(fetchMenu());
  }, [selectName]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className="loader-box">
      <div className="loader"></div>
    </div>
  ) : (
    <ul className="pizza-list">
      {selectPizzaData?.data?.map((pizza) => (
        <PizzaItemCard
          key={pizza.id}
          img={pizza?.imageUrl}
          soldOut={pizza?.soldOut}
          price={pizza?.unitPrice}
          name={pizza?.name}
          ingredients={pizza?.ingredients}
        />
      ))}
    </ul>
  );
};
export default Menu;
