import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  background: mediumaquamarine;
  color: white;
  font-size: 1.1rem;
  /* padding: 1rem 2rem; */
  padding: 0.8em 2em;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  font-weight: 900;
  letter-spacing: 3px;
  margin: 1em 0;
  margin-right: 5px;
`;

const Button = ({ title, onClick }) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
