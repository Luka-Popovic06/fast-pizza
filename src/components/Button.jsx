const Button = ({ btnType, variation, children, clickAction }) => {
  let btnClass;
  if (variation === "primary") btnClass = "btn--primary";
  else if (variation === "primary-medium")
    btnClass = "btn--primary btn--medium";
  else if (variation === "secondary") btnClass = "btn--secondary";
  else if (variation === "danger") btnClass = "btn--danger";

  return (
    <button
      type={btnType}
      onClick={() => clickAction}
      className={`btn ${btnClass}`}
    >
      {children}
    </button>
  );
};
export default Button;
