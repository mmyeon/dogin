import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { useGetAnswer, useSetQuestionNum, useUserAnswerList } from "../context";
import Button from "./Button";
import data from "../data";

const ModalOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: mediumaquamarine;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 25px;
  margin: 0 2rem;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 1rem 0;
`;

const Detail = ({ location: { pathname } }) => {
  const setQuestionNum = useSetQuestionNum();
  const answer = useGetAnswer();
  const questionNumber = JSON.parse(pathname.split("/")[2]);
  const userAnswerList = useUserAnswerList();
  // TODO:userAnswerList가 빈 배열일때 에러 처리하기
  const userSelection =
    userAnswerList.length > 0
      ? userAnswerList[questionNumber - 1]["userAnswer"]
      : null;

  const correctAnswer =
    data[questionNumber - 1][questionNumber]["questionAnswer"];

  useEffect(() => {
    return () => {
      setQuestionNum(questionNumber + 1);
    };
  }, []);

  return (
    <ModalOverlay>
      <ModalContainer>
        <Title>
          {userSelection === correctAnswer
            ? "축하합니다. 정답입니다"
            : "아쉽지만 틀렸습니다"}
        </Title>
        <p>{answer(questionNumber)}</p>
        {questionNumber < data.length ? (
          <Link to={`/question/${questionNumber + 1}`}>
            <Button title="NEXT" />
          </Link>
        ) : (
          <Link to="/review">
            <Button title="NEXT" />
          </Link>
        )}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default withRouter(Detail);
