import React, { useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  useGetAnswer,
  useSetQuestionNum,
  useUserAnswerList,
  useSetUserAnswerList,
} from "../../context";
import Button from "../../components/Button";
import data from "../../data";
import TitleWithCircle from "../../components/TitleWithCircle";

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
  position: relative;
  border: 2px solid black;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 800;
  margin-top: 0.5rem;
  white-space: pre-line;
  line-height: 30px;
`;

const TitleDetail = styled.p`
  white-space: pre-line;
  margin: 1.5rem 0;
  line-height: 22px;
  font-weight: 500;
  font-size: 17px;
`;

const Detail = ({ location: { pathname } }) => {
  let history = useHistory();
  const setQuestionNum = useSetQuestionNum();
  const answer = useGetAnswer();
  const questionNumber = JSON.parse(pathname.split("/")[2]);
  const { answerTitle, answerDetail } = answer(questionNumber);
  const userAnswerList = useUserAnswerList();
  const setUserAnswerList = useSetUserAnswerList();

  useEffect(() => {
    if (questionNumber > userAnswerList.length) {
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
        {/* TODO:정답인지 확인해서 타이틀 보내기  */}
        <TitleWithCircle title={"Great"} />
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
