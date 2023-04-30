import "./DropDown.css";
import { useEffect, useState } from "react";
import DropDownSpeciesChild from "./DropDownSpeciesChild";

const DropDown = ({ label, options, optionValue, optionLabel }) => {
  const [choiceValue, setChoiceValue] = useState();

  // Had a hard time getting initial choiceValue to work, but this solved. Quite many re-renders on initialisation, though.
  useEffect(() => setChoiceValue(options?.[0]?.name), [options]);

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

      <DropDownSpeciesChild
        label={"Eye color"}
        options={options}
        optionValue={"eye_colors"}
        speciesChoosen={choiceValue}
      />
      <DropDownSpeciesChild
        label={"Hair color"}
        options={options}
        optionValue={"hair_colors"}
        speciesChoosen={choiceValue}
      />
      <DropDownSpeciesChild
        label={"Skin color"}
        options={options}
        optionValue={"skin_colors"}
        speciesChoosen={choiceValue}
      />
    </div>
  );
};

export default DropDown;
