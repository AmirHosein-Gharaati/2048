const Button = ({ text, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
