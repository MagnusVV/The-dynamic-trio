import { useState } from "react";

const DropDown = ({ name, label, options, optionValue, optionLabel }) => {
  const [choiceValue, setChoiceValue] = useState(options[0].value);

  const handleChange = (event) => {
    setChoiceValue(event.target.value);
  };

  return (
    <div>
      <label>
        {label}
        <select name={name} value={choiceValue} onChange={handleChange}>
          {options.map((option, index) => (
            <option
              value={option[optionValue]}
              label={option[optionLabel]}
              key={index}
            ></option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default DropDown;
