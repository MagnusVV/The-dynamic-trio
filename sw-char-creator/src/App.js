import logo from "./logo.svg";
import "./App.css";
import backgroundImage from "./images/background-image.png";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="title">
        <h1 style={{ color: "white" }}>Star Wars Character Generator</h1>
      </div>
    </div>
  );
}

export default App;
