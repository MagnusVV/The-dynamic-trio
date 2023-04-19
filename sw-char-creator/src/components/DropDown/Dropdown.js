import { useState } from "react";
import "./DropDown.css";

const DropDown = () => {
  const options = [
    { label: "Jedi", value: "jedi" },
    { label: "Sith", value: "sith" },
    { label: "Force user", value: "force user" },
  ];

  const [choiceValue, setChoiceValue] = useState("jedi");

  const handleChange = (event) => {
    setChoiceValue(event.target.value);
  };

  return (
    <div>
      <label>
        Select order
        <select value={choiceValue} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value} label={option.label}></option>
          ))}
        </select>
      </label>

      <p>Choosen: {choiceValue}</p>
    </div>
  );
};

export default DropDown;
