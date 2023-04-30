import styled from "styled-components";

const CharacterCard = (props) => {
  const CharacterCard = styled.div`
    height: 450px;
    width: 350px;
    background-color: darkgoldenrod;
  `;

  return <CharacterCard>{props.children}</CharacterCard>;
};

export default CharacterCard;
