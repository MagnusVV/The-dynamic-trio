import { useRef, useLayoutEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import DropDown from "./components/DropDown/DropDown";
import backgroundImage from "./images/background-image.png";
import styles from "./styles/styles.css";
import CardContainer from "./components/Card-container/CardContainer";
import Input from "./components/Input/Input";
import CreateCard from "./components/Card/CreateCard";

function App() {
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
            <DropDown></DropDown>
          </CreateCard>
        </CardContainer>
      </section>
    </div>
  );
}

export default App;
