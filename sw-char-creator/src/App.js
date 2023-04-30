import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import DropDown from "./components/DropDown/Dropdown";
import DropDownSpecies from "./components/DropDown/DropDownSpecies";
import DropDownVehicles from "./components/DropDown/DropDownVehicles";
import styles from "./styles/styles.css";
import CardContainer from "./components/Card-container/CardContainer";
import Input from "./components/Input/Input";
import CreateCard from "./components/Card/CreateCard";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import { v4 as uuidv4 } from "uuid";
import FetchFromSwapi from "./functions/FetchFromSwapi";


function App() {
  // These variables are for the dropdown menu(s) --->
  const orderOptions = [
    { label: "Jedi", value: "Jedi" },
    { label: "Sith", value: "Sith" },
  ];
  // <--- --- --- --- --- --- --- --- --- --- --- ---|

  const rootUrl = "https://swapi.dev/api/";

  // This section is for the FIRST API-call --- --->

  // The four species' pages on SWAPI:
  const speciesQueryEndPoints = [
    "species/?page=1",
    "species/?page=2",
    "species/?page=3",
    "species/?page=4",
  ];

  // Species data objects from four different pages are fetched here:
  const speciesPageOneData = FetchFromSwapi(rootUrl, speciesQueryEndPoints[0]);
  const speciesPageTwoData = FetchFromSwapi(rootUrl, speciesQueryEndPoints[1]);
  const speciesPageThreeData = FetchFromSwapi(
    rootUrl,
    speciesQueryEndPoints[2]
  );
  const speciesPageFourData = FetchFromSwapi(rootUrl, speciesQueryEndPoints[3]);

  // The results of the species' API-call will be stored here:
  const allSpecies = [
    ...speciesPageOneData,
    ...speciesPageTwoData,
    ...speciesPageThreeData,
    ...speciesPageFourData,
  ].map((singleSpecies) => singleSpecies);

  // <--- --- --- --- --- --- --- --- --- --- --- ---|

  // This section is for the SECOND API-call --- --->

  // The four vehicles' pages on SWAPI:
  const vehiclesQueryEndPoints = [
    "vehicles/?page=1",
    "vehicles/?page=2",
    "vehicles/?page=3",
    "vehicles/?page=4",
  ];

  // Vehicles data objects from four different pages are fetched here:
  const vehiclesPageOneData = FetchFromSwapi(
    rootUrl,
    vehiclesQueryEndPoints[0]
  );
  const vehiclesPageTwoData = FetchFromSwapi(
    rootUrl,
    vehiclesQueryEndPoints[1]
  );
  const vehiclesPageThreeData = FetchFromSwapi(
    rootUrl,
    vehiclesQueryEndPoints[2]
  );
  const vehiclesPageFourData = FetchFromSwapi(
    rootUrl,
    vehiclesQueryEndPoints[3]
  );

  // The results of the vehicles' API-call will be stored here:
  const allVehicles = [
    ...vehiclesPageOneData,
    ...vehiclesPageTwoData,
    ...vehiclesPageThreeData,
    ...vehiclesPageFourData,
  ].map((singleVehicle) => singleVehicle);

  // <--- --- --- --- --- --- --- --- --- --- --- ---|

  // This section is for Card properties and variables --- --->

  const [characterCards, setCharacterCards] = useState([]);

  const createCharacter = (id) => {
    const newCard = { id: id };

    setCharacterCards([...characterCards, newCard]);
  };

  const handleDelete = (id) => {
    // loops through characterCards and creates a copy if the id match up
    characterCards.forEach((characterCard, index) => {
      if (characterCard.id === id) {
        const copy = [...characterCards];
        // removes one card
        copy.splice(index, 1);
        //update the useState
        setCharacterCards(copy);
      }
    });
  };

  // <--- ---|

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
          <CreateCard>
            <Input placeholder="Your name" />
            <DropDown
              label="Order: "
              options={orderOptions}
              optionValue={"value"}
              optionLabel={"label"}
            />
            <DropDownSpecies
              label="Species: "
              options={allSpecies}
              optionValue={"name"}
              optionLabel={"name"}
            />



            <DropDownVehicles
              label="Vehicles: "
              options={allVehicles}
              optionValue={"name"}
              optionLabel={"name"}
            />

                        <Button
              onClick={() => {
                //generates a random id (NPM package)
                const id = uuidv4();
                createCharacter(id);
              }}
              name="create character"
            />
          </CreateCard>

          {characterCards.map((characterCard) => {
            return (
              <CharacterCard key={characterCard.id} id={characterCard.id}>
                <Button
                  name="Delete"
                  onClick={() => handleDelete(characterCard.id)}
                />
                {characterCard.id}
              </CharacterCard>
            );
          })}
        </CardContainer>
      </section>
    </div>
  );
}

export default App;
