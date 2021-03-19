import React from "react";
import styled from "styled-components";

const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -25px;
`;

const CircleContainer = styled.div`
  display: flex;
`;

const Circle = styled.div`
  width: 45px;
  height: 45px;
  background: ${(props) => props.backgroundColor};
  border: 1px solid black;
  border-radius: 50%;
  position: relative;
  left: ${(props) => props.left || "0px"};
  right: ${(props) => props.right || "0px"};
`;

const Title = styled.span`
  position: absolute;
  font-weight: bold;
  font-size: 21px;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const Answer = ({ title }) => {
  return (
    <>
      <AnswerContainer>
        <CircleContainer>
          {/* TODO:최소한의 정보만 받아야 한다.  */}
          <Circle
            left={"8px"}
            backgroundColor={title === "Great" ? "#219721" : "#FA5656"}
          />
          <Circle
            right={"8px"}
            backgroundColor={title === "Great" ? "#219721" : "#FA5656"}
          />
        </CircleContainer>
        <Title>{title}</Title>
      </AnswerContainer>
    </>
  );
};

export default Answer;
