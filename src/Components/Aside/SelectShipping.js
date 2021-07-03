import "./selectShipping.css";
const SelectShipping = ({title}) => {
  return (
    <div className="selector__wrapper">
      <select className="selector__options">
        <option>{title}</option>
        <option>...</option>
      </select>
    </div>
  );
};
export default SelectShipping;
