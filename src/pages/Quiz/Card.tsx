import styled, { css } from "styled-components";
import { ReactNode } from "react";
import { device } from "@/app/styles/breakpoints";

const StyledCard = styled.div<{ borderType?: string }>`
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
        margin-bottom: 2rem;
      `;
    }
  }}

  @media ${device.tablet} {
    font-size: 1.2em;
    padding: 3em 5em;
  }
`;

type CardProps = {
  borderType?: string;
  children: ReactNode;
};

const Card = ({ borderType, children }: CardProps) => {
  return (
    <StyledCard borderType={borderType} className="Card">
      {children}
    </StyledCard>
  );
};

export default Card;
