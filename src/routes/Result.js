import React from "react";
import styled from "styled-components";
import Card from "../components2/Card";
import { useAnswerList, useQuestionList, useUserChoiceList } from "../context";
import TitleWithCircle from "../components2/TitleWithCircle";

const Background = styled.div`
  width: 100vw;
  height: 200vh;
  background: mediumaquamarine;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .Card {
    border: 3px solid #53ac8e;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    padding: 2.5em;

    > .source-title {
      position: absolute;
      top: -20px;
      background: white;
      padding: 6px 20px;
      border: 3px solid #53ac8e;
      border-radius: 20px;
      font-weight: bold;
      font-size: 17px;
    }

    > .result-overview {
      border-bottom: 2px dashed #000000b5;

      > h1 {
        font-size: 22px;
        font-weight: bold;
        margin-top: 10px;
      }

      > .heart-container {
        display: inline-flex;
        align-items: center;

        > img {
          width: 80px;
          height: 80px;
          margin: 8px 0;
        }

        > span {
          margin-left: -20px;
          background: #cb2527;
          color: white;
          padding: 9px 25px;
          border: 3px solid black;
          border-radius: 20px;
          font-size: 14px;
          z-index: -1;
          letter-spacing: 1px;
        }
      }
    }

    > .result-detail {
      > h1 {
        font-size: 22px;
        font-weight: bold;
        margin-top: 20px;
        line-height: 30px;
      }

      ul {
        width: 100%;

        li {
          padding: 15px 0;
          border-bottom: 1px solid black;
          text-align: left;
          font-size: 20px;
          padding-left: 10px;
        }
      }
    }
  }
`;

const Result = () => {
  const userChoiceList = useUserChoiceList();
  const answerList = useAnswerList();
  const questionList = useQuestionList();
  let resultList = [];

  checkResult();

  const correctAnswerNumber = resultList.filter(
    (answer) => answer.result === "맞음"
  ).length;

  const incorrectAnswerList = resultList.filter(
    (answer) => answer.result === "틀림"
  );

  console.log("incorrectAnswerList", incorrectAnswerList);

  return (
    <Background>
      <Card>
        <TitleWithCircle title={"나의 결과는?"} />

        <section className="result-overview">
          <h1>{showScore()}</h1>
          <div className="heart-container">
            <img src="./assets/pet-love.png" alt="pet love" />
            <span>
              {userChoiceList.length}개 중 {correctAnswerNumber}개 충족
            </span>
          </div>
        </section>

        <section className="result-detail">
          <h1>
            입양하기 전 <br></br>더 고민해보세요
          </h1>
          <ul>
            {/* TODO: 다 맞춘경우, 들어갈 문구 추가하기 */}
            {incorrectAnswerList.map((item, i) => (
              <li key={i.toString()}>
                {questionList[item.currentQuizNumber - 1]["key"]}
              </li>
            ))}
          </ul>
        </section>
      </Card>
    </Background>
  );

  function checkResult() {
    for (let i = 0; i < userChoiceList.length; i++) {
      userChoiceList[i] === answerList[i]
        ? resultList.push({ currentQuizNumber: i + 1, result: "맞음" })
        : resultList.push({ currentQuizNumber: i + 1, result: "틀림" });
    }
  }

  function showScore() {
    if (correctAnswerNumber > 7) {
      return "우와! 준비를 많이 하셨군요.";
    } else if (correctAnswerNumber > 5) {
      return "부족한 부분을 채워보세요.";
    } else {
      return "아직 준비가 더 필요해요";
    }
  }
};

export default Result;
