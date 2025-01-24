import styled from "styled-components";
import { BaseSyntheticEvent } from "react";

const ButtonContainer = styled.button<{
  marginRight?: string;
}>`
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
`;

type ButtonProps = {
  title: string;
  onClick?: (e: BaseSyntheticEvent) => void;
  marginRight?: string;
};

const Button = ({ title, onClick, marginRight }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} marginRight={marginRight}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
