import React, { useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  useGetAnswer,
  useSetQuestionNum,
  useUserAnswerList,
  useSetUserAnswerList,
} from "../context";
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
`;

const ModalContainer = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 18px;
  margin: 0 2rem;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  margin-top: 1rem;
  white-space: pre-line;
  line-height: 2.1rem;
`;

const TitleDetail = styled.p`
  white-space: pre-line;
  margin: 1.5rem 0;
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 500;
`;

const Detail = ({ location: { pathname } }) => {
  let history = useHistory();
  const setQuestionNum = useSetQuestionNum();
  const answer = useGetAnswer();
  const questionNumber = JSON.parse(pathname.split("/")[2]);
  const { answerTitle, answerDetail } = answer(questionNumber);
  const userAnswerList = useUserAnswerList();
  const setUserAnswerList = useSetUserAnswerList();

  const userSelection = userAnswerList[userAnswerList.length - 1]["userAnswer"];
  const correctAnswer =
    data[questionNumber - 1][questionNumber]["questionAnswer"];

  useEffect(() => {
    if (questionNumber > userAnswerList.length) {
      // TODO: 1일 떄는 그냥 진행됨
      history.push("/");
      setUserAnswerList([]);
    }

    return () => {
      setQuestionNum(questionNumber + 1);
    };
  }, []);

  useEffect(() => {}, []);

  return (
    <ModalOverlay>
      <ModalContainer>
        <Title>{answerTitle}</Title>
        <TitleDetail>{answerDetail}</TitleDetail>
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
