import React from "react";
import styled from "styled-components";

const StyledTiTleWithCircle = styled.span`
  position: absolute;
  top: -20px;
  background: white;
  padding: 6px 20px;
  border: 3px solid #53ac8e;
  border-radius: 20px;
  font-weight: bold;
  font-size: 17px;
`;

const TitleWithCircle = ({ title }: { title: string }) => {
  return <StyledTiTleWithCircle>{title}</StyledTiTleWithCircle>;
};

export default TitleWithCircle;
