import styled from "styled-components";

const CharacterCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 28rem;
  min-width: 18.75rem;
  padding: 2rem;
  margin-top: 1rem;
  border: ${(props) =>
    props.jedi ? "3px solid #2FF924" : "3px solid #EB212E"};
  box-shadow: ${(props) =>
    props.jedi
      ? "#2ff924 0px 10px 55px, #2ff924 0px -12px 30px}"
      : "#EB212E 0px 10px 55px, #EB212E 0px -12px 30px"};
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  color: yellow;
`;

const CharacterCard = (props) => {
  return (
    <CharacterCardStyled jedi={props.jedi}>
      {props.children}
    </CharacterCardStyled>
  );
};

export default CharacterCard;
