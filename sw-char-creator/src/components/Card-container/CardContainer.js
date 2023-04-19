import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: aqua;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0px 0px;
  padding: 1rem;
`;

export default CardContainer;
