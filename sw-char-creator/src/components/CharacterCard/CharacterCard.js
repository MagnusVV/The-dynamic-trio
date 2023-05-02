import styled from "styled-components";

const CharacterCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 28rem;
  min-width: 18.75rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: yellow;
`;

const CharacterCard = (props) => {
  return <CharacterCardStyled>{props.children}</CharacterCardStyled>;
};

export default CharacterCard;
