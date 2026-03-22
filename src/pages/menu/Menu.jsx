import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  const name = useSelector((state) => state.username.name);
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name]);
};
export default Menu;
