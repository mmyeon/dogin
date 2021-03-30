import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  border-radius: 18px;
  margin: 0 2rem;
  background: white;
  z-index: 1;
  position: relative;
  border: 2px solid black;
  padding: 1.3em;

  ${(props) => {
    if (props.borderType === "special") {
      return css`
        border: 3px solid #53ac8e;
        display: flex;
        align-items: center;
        flex-direction: column;
        align-items: center;
        padding: 1.5em 2em;
        margin-bottom: 4rem;
      `;
    }
  }}
`;

const Card = ({ borderType, children }) => {
  return (
    <StyledCard borderType={borderType} className="Card">
      {children}
    </StyledCard>
  );
};

export default Card;
