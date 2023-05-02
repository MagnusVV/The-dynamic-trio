import "./DropDown.css";
import { useState, useEffect } from "react";

const DropDown = ({ name, label, speciesChoosen, options, optionValue }) => {
  // Checks for the species-object with same "name"-property as speciesChoosen:
  const foundSpeciesObject = options.find(
    (speciesObject) => speciesObject.name === speciesChoosen
  );

  const [choiceValue, setChoiceValue] = useState();

  // Had a hard time getting initial choiceValue to work, but this solved. Quite many re-renders on initialisation, though.
  useEffect(
    () => setChoiceValue(foundSpeciesObject?.[optionValue].split(",")[0]),
    [foundSpeciesObject, optionValue]
  );

  const handleChange = (event) => {
    setChoiceValue(event.target.value);
  };

  return (
    <div>
      <label>
        {label}
        <select name={name} value={choiceValue} onChange={handleChange}>
          {foundSpeciesObject?.[optionValue].split(",").map((option, index) => (
            <option value={option} label={option} key={index}></option>
          ))}
        </select>
      </label>

      <p>Choosen: {choiceValue}</p>
    </div>
  );
};

export default DropDown;
