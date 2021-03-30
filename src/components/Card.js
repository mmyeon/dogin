import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  /* borderType === "plain" */
  /* borderType === "special" */
  border: 2px solid black;
  border-radius: 18px;
  margin: 0 2rem;
  background: white;
  z-index: 1;
  position: relative;
  padding: 1.5em;
`;

const Card = ({ borderType, children }) => {
  return (
    <StyledCard borderType={borderType} className="Card">
      {children}
    </StyledCard>
  );
};

export default Card;
