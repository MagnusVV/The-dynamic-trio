import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: aqua;
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  padding: 1rem;
`;

export default CardContainer;
