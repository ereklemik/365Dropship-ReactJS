import "./button.css";
const Button = ({ content, handleClick, className }) => {
  return <button onClick={handleClick} className={className}>{content}</button>;
};

export default Button;
