import styled from "styled-components";

const Input = styled.input`
  width: 10rem;
  margin: unset;
  padding: 0.5rem 1.25rem;
  border-radius: 1.25rem;
  border-color: rgb(50, 50, 50);
  background-color: rgb(0, 0, 0);
  color: white;
  &:focus {
    outline: none;
    border: 2px solid #2ff923;
  }
`;

export default Input;
