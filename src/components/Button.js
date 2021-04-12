import React from "react";
import styled from "styled-components";
import { device } from "../breakpoints";

const ButtonContainer = styled.button`
  font-family: "Poppins", sans-serif;
  color: #c8c5d2;
  font-size: 1.1rem;
  padding: 0.4em 1.5em;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  font-weight: 900;
  letter-spacing: 3px;
  border: 2px solid black;
  margin-right: ${(props) => props.marginRight || "0px"};
  background: mediumaquamarine;
  color: white;

  @media ${device.laptop} {
    background: white;
    border-color: #c8c5d2;
    padding: 0.5em 2em;
    color: #c8c5d2;
  }

  &:hover {
    background: mediumaquamarine;
    color: white;
    border-color: black;
  }
`;

const Button = ({ title, onClick, marginRight }) => {
  return (
    <ButtonContainer onClick={onClick} marginRight={marginRight}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
