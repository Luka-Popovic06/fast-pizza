import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { selectTotalPriceOfPizzas } from "./redux/selectors";
import { useSelector } from "react-redux";

function SharedLayout() {
  const total = useSelector(selectTotalPriceOfPizzas);
  return (
    <>
      <Navbar />
      <Outlet />
      {total && <Footer total={total} />}
    </>
  );
}

export default SharedLayout;
