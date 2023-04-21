import React from "react";
import styled from "styled-components";

const CreateCard = styled.div`
  padding: 1rem;
  min-height: 20rem;
  width: 40rem;
  background-color: cadetblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  grid-column: 1/2;
  grid-row: 1/2;
`;

export default CreateCard;
