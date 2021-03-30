import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  font-family: "Poppins", sans-serif;
  background: white;
  color: #c8c5d2;
  font-size: 1.1rem;
  padding: 0.5em 2em;
  border: 2px solid #c8c5d2;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  font-weight: 900;
  letter-spacing: 3px;
  margin-right: ${(props) => props.marginRight || "0px"};

  /* 데스크탑 */
  &:hover {
    background: mediumaquamarine;
    color: white;
    border-color: black;
  }

  /* TODO: 모바일은 클릭하면 컬러 변하도록 설정 */
`;

const Button = ({ title, onClick, marginRight }) => {
  return (
    <ButtonContainer onClick={onClick} marginRight={marginRight}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
