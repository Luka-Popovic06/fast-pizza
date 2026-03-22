import { useSelector } from "react-redux";

const Navbar = () => {
  const name = useSelector((state) => state.username.name);
  return (
    <nav>
      <h1 className="website__name">Fast Pizza Co.</h1>
      <form className="nav__form">
        <input type="text" placeholder="Search order #" maxLength={25} />
      </form>
      {name && <p className="user__name">{name}</p>}
    </nav>
  );
};
export default Navbar;
