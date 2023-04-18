import { useRef, useLayoutEffect, useState } from "react";
import "./App.css";
import { useEffect } from "react";
import ScrollBtn from "./components/Button";
import backgroundImage from "./images/background-image.png";
import styles from "./styles/styles.css";

const App = () => {
  //API-testing --->

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //<--- ---|

  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  //finds out the height of the element
  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);
  // Scrolls down the height of the first section
  const scrollDown = () => {
    window.scrollTo({ top: height, behavior: "smooth" });
    console.log("hello world");
  };

  return (
    <div className="App">
      {/* gets the height of the section element */}
      <section ref={ref} className="title-section">
        <div className="title">
          <h1
            className="font-face-sfdg"
            style={{ color: "yellow", fontSize: "100px", textAlign: "center" }}
          >
            Star Wars Character Generator
          </h1>
        </div>
        {/* <ScrollBtn onClick={scrollDown} /> */}
        <button onClick={scrollDown}>Click me</button>
      </section>

      <section className="card-section">
        <h2>hello world</h2>
      </section>
    </div>
  );
};

export default App;
