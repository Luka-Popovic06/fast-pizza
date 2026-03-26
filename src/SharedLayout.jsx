import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
/*&*/

function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default SharedLayout;
