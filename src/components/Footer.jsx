import { FaArrowRight } from "react-icons/fa6";
const Footer = () => {
  const pr = 27.0;
  return (
    <footer>
      <div>
        <p className="prodacts__number">2</p>
        <p className="total__price">{pr.toFixed(2)}$</p>
      </div>
      <button type="button">
        OPEN CART <FaArrowRight />
      </button>
    </footer>
  );
};
export default Footer;
