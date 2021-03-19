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

const BackgroundCircle = styled.div`
  display: flex;
  .circle {
    width: 45px;
    height: 45px;
    background: ${(props) => props.backgroundColor};
    border: 1px solid black;
    border-radius: 50%;
    position: relative;

    &.left {
      left: 0px;
    }

    &.right {
      right: 0px;
    }
  }
`;

const Answer = ({ title }) => {
  return (
    <>
      <AnswerContainer>
        <BackgroundCircle
          backgroundColor={title === "Great" ? "#219721" : "#FA5656"}
        >
          <div className="circle left" />
          <div className="circle right" />
        </BackgroundCircle>

        <Title>{title}</Title>
      </AnswerContainer>
    </>
  );
};

export default Answer;
