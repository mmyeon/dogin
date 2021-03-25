import React from "react";
import { withRouter } from "react-router-dom";
import {
  useGetQuestion,
  useQuestionList,
  useSetUserChoiceList,
  useUserChoiceList,
} from "../../context";
import Choice from "../../components/Choice";
import Card from "../../components/Card";
import styled from "styled-components";

const QuestionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#f1f2f7 41%, mediumaquamarine 41%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .indicator {
    width: 100%;
    height: 50px;
    padding: 0;
    background: mediumaquamarine;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 18px;
    border: 2px solid black;
    position: absolute;
    left: 0;
    top: -40px;

    > li {
      color: white;

      &.current {
        color: mediumaquamarine;
        background: white;
        border-radius: 58%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .content {
    > img {
      width: 130px;
      height: 130px;
      margin-top: 20px;
    }

    > h1 {
      font-size: 1.6rem;
      margin: 1rem 0;
      white-space: pre-line;
      line-height: 2.1rem;
    }
  }
`;

const Question = ({ location: { pathname }, setAsAnswered }) => {
  const getQuestion = useGetQuestion();
  const currentQuizNumber = JSON.parse(pathname.split("/")[2]);
  const { question, imageFileName } = getQuestion(currentQuizNumber);
  const userChoiceList = useUserChoiceList();
  const setUserChoiceList = useSetUserChoiceList();
  const questionList = useQuestionList();

  return (
    <QuestionContainer>
      <Card>
        <ul className="indicator">
          {questionList.map((item, i) => (
            <li
              key={i.toString()}
              className={i + 1 === currentQuizNumber ? "current" : null}
            >
              {i + 1}
            </li>
          ))}
        </ul>
        <section className="content">
          <img
            src={`/assets/${imageFileName}`}
            alt={imageFileName.slice(0, imageFileName.match(/.png/).index)}
          />

          <h1>{question}</h1>
          <Choice onClick={updateResult} />
        </section>
      </Card>
    </QuestionContainer>
  );

  function updateResult(e) {
    setAsAnswered();
    const userChoice = e.target.innerText;
    setUserChoiceList([...userChoiceList, { currentQuizNumber, userChoice }]);
  }
};

export default withRouter(Question);
