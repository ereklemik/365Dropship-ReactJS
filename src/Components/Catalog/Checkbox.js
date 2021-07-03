import "./checkbox.css";

const Checkbox = ({
  checked,
  handleCheckboxChange,
  handleCheckbox,
  isChecked,
  id,
}) => {
  return (
    <div className="catalog__checkbox">
      <label htmlFor={id}>
        <input
          className="catalog__checkbox-item catalog__checkbox-item--default"
          type="checkbox"
          onChange={handleCheckbox}
          id={id}
          checked={isChecked}
        />
        <div className="catalog__checkbox-item catalog__checkbox-item--custom"></div>
      </label>
    </div>
  );
};

export default Checkbox;
