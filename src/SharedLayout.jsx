import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import MenuLoader from "./pages/menu/MenuLoader";

function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default SharedLayout;
