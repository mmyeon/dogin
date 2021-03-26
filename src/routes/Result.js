import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useAnswerList, useUserChoiceList } from "../context";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: mediumaquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .Card {
    border: 3px solid #53ac8e;
    position: relative;

    > .result-title {
      position: absolute;
      top: -16px;
      left: 50px;
      background: white;
      padding: 6px 23px;
      border: 3px solid #53ac8e;
      border-radius: 20px;
    }

    > .result-overview {
      border-bottom: 1px solid black;

      > h1 {
        font-size: 19px;
        font-weight: bold;
      }
    }
  }
`;

const Result = () => {
  const userChoiceList = useUserChoiceList();
  const answerList = useAnswerList();
  let resultList = [];

  checkResult();

  const correctAnswerNumber = resultList.filter(
    (answer) => answer.result === "맞음"
  ).length;

  const incorrectAnswerNumber = resultList.filter(
    (answer) => answer.result === "틀림"
  ).length;

  return (
    <Background>
      <Card>
        <span className="result-title">나의 결과는?</span>
        <section className="result-overview">
          {/* TODO: 맞춘 개수에 따라 결과 달리지기 */}
          <h1>아직 준비가 더 필요해요</h1>
          <div className="heart-container">
            <img src="" alt="" />
            <div>
              {userChoiceList.length}개 중 {correctAnswerNumber}개 충족
            </div>
          </div>
        </section>
        <section className="result-detail">
          <h1>입양하기 전 더 고민해보세요</h1>
        </section>
        {/* <h1>맞음 : {correctAnswerNumber}</h1>
        <h2>
          {resultList
            .filter((item) => item.result === "맞음")
            .map((item, i) => `${item.currentQuizNumber} 번 문제, `)}
        </h2>
        <h1>틀림 : {incorrectAnswerNumber} </h1>
        <h2>
          {resultList
            .filter((answer) => answer.result === "틀림")
            .map((item, i) => `${item.currentQuizNumber} 번 문제, `)}
        </h2> */}
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
};

export default Result;
// const Result = () => {
//   const userChoiceList = useUserChoiceList();
//   const answerList = useAnswerList();
//   let resultList = [];

//   checkResult();

//   const correctAnswerNumber = resultList.filter(
//     (answer) => answer.result === "맞음"
//   ).length;

//   const incorrectAnswerNumber = resultList.filter(
//     (answer) => answer.result === "틀림"
//   ).length;

//   return (
//     <section>
//       <h1>맞음 : {correctAnswerNumber}</h1>
//       <h2>
//         {resultList
//           .filter((item) => item.result === "맞음")
//           .map((item, i) => `${item.currentQuizNumber} 번 문제, `)}
//       </h2>
//       <h1>틀림 : {incorrectAnswerNumber} </h1>
//       <h2>
//         {resultList
//           .filter((answer) => answer.result === "틀림")
//           .map((item, i) => `${item.currentQuizNumber} 번 문제, `)}
//       </h2>
//     </section>
//   );

//   function checkResult() {
//     for (let i = 0; i < userChoiceList.length; i++) {
//       userChoiceList[i]["userChoice"] === answerList[i]
//         ? resultList.push({ currentQuizNumber: i + 1, result: "맞음" })
//         : resultList.push({ currentQuizNumber: i + 1, result: "틀림" });
//     }
//   }
// };

// export default Result;
