import { useRef, useLayoutEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import DropDown from "./components/DropDown/DropDown";
import DropDownApiValues from "./components/DropDown/DropDownApiValues";
import backgroundImage from "./images/background-image.png";
import styles from "./styles/styles.css";
import CardContainer from "./components/Card-container/CardContainer";
import Input from "./components/Input/Input";
import CreateCard from "./components/Card/CreateCard";

function App() {
  // These variables are for the dropdown menu(s) --->
  const options = [
    { label: "Jedi", value: "jedi" },
    { label: "Sith", value: "sith" },
  ];

  const [choiceValue, setChoiceValue] = useState(options[0].value);

  const handleChange = (event) => {
    setChoiceValue(event.target.value);
  };
  // <--- --- ---|

  // const ref = useRef(null);
  // const [height, setHeight] = useState(0);

  //finds out the height of the element
  // useLayoutEffect(() => {
  //   setHeight(ref.current.offsetHeight);
  // }, []);
  // Scrolls down the height of the first section
  // const scrollDown = () => {
  //   window.scrollTo({ top: height, behavior: "smooth" });
  //   console.log("hello world");
  // };

  return (
    <div className="App">
      <section className="title-section">
        <div className="title">
          <h1
            className="font-face-sfdg"
            style={{ color: "yellow", fontSize: "100px", textAlign: "center" }}
          >
            Star Wars Character Generator
          </h1>
        </div>
        <Button name="Get started" />
      </section>

      <section className="card-section">
        <CardContainer>
          <div style={{ backgroundColor: "#FF5733" }}>
            <h1>Hello World</h1>
          </div>
          <CreateCard>
            <Input placeholder="Your name" />
            <DropDown
              label="Order: "
              value={choiceValue}
              onChange={handleChange}
              options={options}
            />
            <DropDownApiValues label="Species: " endPoint="species/" />
            <DropDownApiValues label="Homeworld: " endPoint="planets/" />
            <DropDownApiValues label="Age: " endPoint="people/" />
            <DropDownApiValues label="Eye color: " endPoint="people/" />
            <DropDownApiValues label="Skin color: " endPoint="people/" />
            <DropDownApiValues label="Hair color: " endPoint="people/" />
            <DropDownApiValues label="Vehicle: " endPoint="vehicles/" />
          </CreateCard>
        </CardContainer>
      </section>
    </div>
  );
}

export default App;
