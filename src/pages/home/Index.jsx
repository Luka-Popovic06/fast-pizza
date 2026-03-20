import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className="home">
      <header>
        <h1>
          The best pizza <span>Straight out of the oven, straight to you</span>
        </h1>
      </header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/menu");
        }}
      >
        <label htmlFor="username">
          👋 Welcome! Please start by telling us your name:
        </label>
        <input type="text" id="username" placeholder="Your full name" />
        {/**Btn se pojavljuje ako je input value=" " */}
        <Button type={"submit"} variation={"primary"}>
          Submit name
        </Button>
      </form>
    </main>
  );
};
export default HomePage;
