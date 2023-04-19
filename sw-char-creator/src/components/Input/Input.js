import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 10rem;
  padding: 8px 20px;
  border-radius: 20px;
  background-color: black;
  color: white;
  &:focus {
    outline: none;
    border: 2px solid #2ff923;
  }
`;

export default Input;
