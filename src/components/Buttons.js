const Button = ({ text, onClick, classes="" }) => {
  return (
    <div className={"button " + classes} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
