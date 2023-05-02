import styled from "styled-components";

const CharacterCardStyled = styled.div`
  height: 450px;
  width: 350px;
  background-color: darkgoldenrod;
`;

const CharacterCard = (props) => {
  return <CharacterCardStyled>{props.children}</CharacterCardStyled>;
};

export default CharacterCard;
