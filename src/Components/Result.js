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
  let history = useHistory();
  const setQuestionNum = useSetQuestionNum();
  const answer = useGetAnswer();
  const questionNumber = JSON.parse(pathname.split("/")[2]);
  const userAnswerList = useUserAnswerList();
  const setUserAnswerList = useSetUserAnswerList();

  // TODO: 질문하기 - 내 예상에 2번 TODO가 가능할 것 같은데 실제로는 불가함.
  // TODO: 배열의 갯수가 질문의 넘버와 다른 경우
  const userSelection = userAnswerList[userAnswerList.length - 1]["userAnswer"];
  // 2번 TODO: 배열의 갯수가 질문의 넘버와 같은 경우
  // const userSelection = userAnswerList[questionNumber - 1]["userAnswer"];
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
