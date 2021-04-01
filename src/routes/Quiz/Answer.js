import React, { useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  useGetAnswerDesc,
  useSetCurrentQuizNumber,
  useUserChoiceList,
  useSetUserChoiceList,
  useQuestionList,
  useAnswerList,
} from "../../context";
import Button from "../../components/Button";
import TitleWithBubble from "../../components/TitleWithBubble";
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

    .reference {
      font-weight: 200;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 1rem;
      color: #595656d4;

      > a {
        color: #595656d4;
      }
    }
  }
`;

const Answer = ({ location: { pathname } }) => {
  let history = useHistory();
  const currentQuizNumber = JSON.parse(pathname.split("/")[2]);
  const setCurrentQuizNumber = useSetCurrentQuizNumber();
  const questionList = useQuestionList();
  const getAnswerDesc = useGetAnswerDesc();
  const {
    answerDesc: { answerTitle, explanation, referenceList },
  } = getAnswerDesc(currentQuizNumber);
  const userChoiceList = useUserChoiceList();
  const setUserChoiceList = useSetUserChoiceList();
  const answerList = useAnswerList();

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
        {
          <TitleWithBubble
            title={
              userChoiceList[currentQuizNumber - 1] ===
              answerList[currentQuizNumber - 1]
                ? "Great"
                : "No No"
            }
          />
        }

        <h1 className="answer-title">{answerTitle}</h1>

        <p className="explanation">{explanation}</p>

        {referenceList !== undefined && (
          <span className="reference">
            <h3>출처 </h3>
            {referenceList.map((reference, i) => (
              <a
                key={i.toString()}
                href={reference.link}
                target="_blank"
                rel="noreferrer"
              >
                {reference.title}
              </a>
            ))}
          </span>
        )}

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
