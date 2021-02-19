import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ModalOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div`
  width: 400px;
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
`;

const Title = styled.h1`
  color: white;
`;

const Detail = ({ setQuestionNum, questionNum }) => {
  function updateQuestion() {
    setQuestionNum((questionNum += 1));
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <Title>이 문제를 맞히셨습니다</Title>
        <Button title="다음" onClick={updateQuestion} />
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Detail;
