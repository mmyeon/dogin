import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  useGetQuestion,
  useSetUserAnswerList,
  useUserAnswerList,
} from "../context";
import Answers from "../Components/Answers";
import Result from "../Components/Result";
import styled from "styled-components";
import data from "../data";

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

const Question = ({ location: { pathname } }) => {
  const question = useGetQuestion();
  const userAnswerList = useUserAnswerList();
  const setUserAnswerList = useSetUserAnswerList();
  const [isVisibleResult, setIsVisibleResult] = useState(false);
  const questionNumber = JSON.parse(pathname.split("/")[2]);

  function handleResult(e) {
    setIsVisibleResult(true);
    const userAnswer = e.target.innerText;
    setUserAnswerList([...userAnswerList, { questionNumber, userAnswer }]);
  }

  useEffect(() => {
    if (userAnswerList.length > data.length) {
      return setUserAnswerList([]);
    }

    if (userAnswerList.length < questionNumber) {
      // TODO: Home 페이지로 이동
    }
  }, [userAnswerList]);

  return (
    <QuestionContainer>
      <span>{questionNumber}</span>
      <Title>{question(questionNumber)}</Title>
      <Answers onClick={handleResult} />
      {isVisibleResult && <Result />}
    </QuestionContainer>
  );
};

export default withRouter(Question);
