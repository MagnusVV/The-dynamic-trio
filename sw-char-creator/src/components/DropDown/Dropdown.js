import "./DropDown.css";

const DropDown = ({ label, value, onChange, options }) => {
  return (
    <div>
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option, index) => (
            <option
              value={option.value}
              label={option.label}
              key={index}
            ></option>
          ))}
        </select>
      </label>

      <p>Choosen: {value}</p>
    </div>
  );
};

export default DropDown;
