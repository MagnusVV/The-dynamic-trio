import logo from "./logo.svg";
import "./App.css";
import backgroundImage from "./images/background-image.png";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
}

export default App;
