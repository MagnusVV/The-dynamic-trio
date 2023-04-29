import "./DropDown.css";
import { useState } from "react";

const DropDown = ({ label, options, optionValue, optionLabel }) => {
  const [choiceValue, setChoiceValue] = useState(options[0].value);

  const handleChange = (event) => {
    setChoiceValue(event.target.value);
  };

  return (
    <div>
      <label>
        {label}
        <select value={choiceValue} onChange={handleChange}>
          {options.map((option, index) => (
            <option
              value={option[optionValue]}
              label={option[optionLabel]}
              key={index}
            ></option>
          ))}
        </select>
      </label>

      <p>Choosen: {choiceValue}</p>
    </div>
  );
};

export default DropDown;
