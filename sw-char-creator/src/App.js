import "./App.css";
import backgroundImage from "./images/background-image.png";
import styles from "./styles/styles.css";

function App() {
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
      </section>

      <section className="card-section"></section>
    </div>
  );
}

export default App;
