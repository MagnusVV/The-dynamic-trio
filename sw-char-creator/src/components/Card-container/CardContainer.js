import styled from "styled-components";

const CardContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

export default CardContainer;
