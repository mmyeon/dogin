import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  background: mediumaquamarine;
  color: white;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  font-weight: 900;
  letter-spacing: 3px;
`;

const Button = ({ title, onClick }) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
