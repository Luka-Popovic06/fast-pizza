import { FaArrowRight } from "react-icons/fa6";
import { selectTotalPriceOfPizzas } from "../redux/selectors";
const Footer = () => {
  const total = useSelector((state) => selectTotalPriceOfPizzas(state));

  console.log(total);
  return (
    <footer>
      <div>
        <p className="prodacts__number">2</p>
        <p className="total__price">{total.toFixed(2)}$</p>
      </div>
      <button type="button">
        OPEN CART <FaArrowRight />
      </button>
    </footer>
  );
};
export default Footer;
