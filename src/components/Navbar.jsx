const Navbar = ({ name }) => {
  return (
    <nav>
      <h1 className="website__name">Fast Pizza Co.</h1>
      <form className="nav__form">
        <input type="text" placeholder="Search order #" maxLength={25} />
      </form>
      {name && <p className="user__name">Luka</p>}
    </nav>
  );
};
export default Navbar;
