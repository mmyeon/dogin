import React, { useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  useGetAnswer,
  useSetCurrentQuizNumber,
  useUserChoiceList,
  useSetUserChoiceList,
  useQuestionList,
} from "../../context";
import Button from "../../components/Button";
import TitleWithCircle from "../../components/TitleWithCircle";
import Card from "../../components/Card";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: mediumaquamarine;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  > .Card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .answer-title {
      font-size: 24px;
      font-weight: 800;
      margin-top: 0.5rem;
      white-space: pre-line;
      line-height: 30px;
    }

    .explanation {
      white-space: pre-line;
      margin: 1.5rem 0;
      line-height: 22px;
      font-weight: 500;
      font-size: 17px;
    }
  }
`;

const Answer = ({ location: { pathname } }) => {
  let history = useHistory();
  const currentQuizNumber = JSON.parse(pathname.split("/")[2]);
  const setCurrentQuizNumber = useSetCurrentQuizNumber();
  const questionList = useQuestionList();
  const getAnswer = useGetAnswer();
  const {
    answer: { answerTitle, explanation },
  } = getAnswer(currentQuizNumber);
  const userChoiceList = useUserChoiceList();
  const setUserChoiceList = useSetUserChoiceList();

  useEffect(() => {
    if (currentQuizNumber > userChoiceList.length) {
      history.push("/");
      setUserChoiceList([]);
    }

    return () => {
      setCurrentQuizNumber(currentQuizNumber + 1);
    };
  }, []);

  return (
    <Background>
      <Card>
        {/* TODO:정답인지 확인해서 타이틀 보내기  */}
        <TitleWithCircle title={"Great"} />

        <h1 className="answer-title">{answerTitle}</h1>

        <p className="explanation">{explanation}</p>

        {currentQuizNumber < questionList.length ? (
          <Link to={`/quiz/${currentQuizNumber + 1}`}>
            <Button title="NEXT" />
          </Link>
        ) : (
          <Link to="/result">
            <Button title="NEXT" />
          </Link>
        )}
      </Card>
    </Background>
  );
};

export default withRouter(Answer);
