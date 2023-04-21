import "./DropDown.css";
import { useEffect, useState } from "react";

const DropDownApiValues = ({ label, endPoint }) => {
  const rootUrl = "https://swapi.dev/api/";

  // The result of the API-call will be stored here:
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(rootUrl + endPoint)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [endPoint]);

  const [choiceValue, setChoiceValue] = useState("Human");

  const handleChange = (event) => {
    setChoiceValue(event.target.value);
  };

  return (
    <div>
      <label>
        {label}
        <select value={choiceValue} onChange={handleChange}>
          {posts.map((post, index) => (
            <option value={post.name} label={post.name} key={index}></option>
          ))}
        </select>
      </label>

      <p>Choosen: {choiceValue}</p>
    </div>
  );
};

export default DropDownApiValues;
