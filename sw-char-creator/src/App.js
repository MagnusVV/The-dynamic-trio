import "./App.css";
import backgroundImage from "./images/background-image.png";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="title">
        <h1
          className="font-face-sfdg"
          style={{ color: "yellow", fontSize: "100px", textAlign: "center" }}
        >
          Star Wars Character Generator
        </h1>
      </div>
    </div>
  );
}

export default App;
