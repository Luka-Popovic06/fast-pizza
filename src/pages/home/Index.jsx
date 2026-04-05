import Button from "../../components/Button";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUsername } from "../../redux/stor/usernameSlice";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.username.name);

  return (
    <main className="home">
      <header>
        <h1>
          The best pizza <span>Straight out of the oven, straight to you</span>
        </h1>
      </header>
      {name ? (
        <NavLink to={"/menu"} className={"nav-link"}>
          Continue ordering, {name}
        </NavLink>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addUsername(inputValue));
            navigate("/menu");
          }}
        >
          <label htmlFor="username">
            👋 Welcome! Please start by telling us your name:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Your full name"
            required
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button type={"submit"} variation={"primary"}>
            Submit name
          </Button>
        </form>
      )}
    </main>
  );
};
export default HomePage;
