import React, { useState } from "react";
import Answers from "../Components/Answers";
import Result from "../Components/Result";
import { useGetQuestion, useQuestionNum } from "../context";
import styled from "styled-components";

const QuestionContainer = styled.div`
  padding: 1.5em;
  border: 2px solid #0000005c;
  border-radius: 25px;
  margin: 0 2rem;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 1rem 0;
`;

const Question = () => {
  const questionNum = useQuestionNum();
  const question = useGetQuestion();
  const [isVisibleResult, setIsVisibleResult] = useState(false);

  function handleDetail() {
    setIsVisibleResult(true);
  }

  return (
    <QuestionContainer>
      <span>{questionNum}</span>
      <Title>{question(questionNum)}</Title>
      <Answers onClick={handleDetail} />
      {isVisibleResult && <Result />}
    </QuestionContainer>
  );
};

export default Question;
