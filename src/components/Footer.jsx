import { FaArrowRight } from "react-icons/fa6";
import { selectTotalPizzasQuantity } from "../redux/selectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Footer = ({ total }) => {
  const quantity = useSelector(selectTotalPizzasQuantity);
  return (
    <footer>
      <div>
        <p className="prodacts__number">{quantity}</p>
        <p className="total__price">{total.toFixed(2)}$</p>
      </div>
      <NavLink type="button" to={"/cart"}>
        OPEN CART <FaArrowRight />
      </NavLink>
    </footer>
  );
};
export default Footer;
