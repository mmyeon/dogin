import React from "react";
import { useAnswerList, useUserChoiceList } from "../context";

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
    <section>
      <h1>맞음 : {correctAnswerNumber}</h1>
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
      </h2>
    </section>
  );

  function checkResult() {
    for (let i = 0; i < userChoiceList.length; i++) {
      userChoiceList[i]["userChoice"] === answerList[i]
        ? resultList.push({ currentQuizNumber: i + 1, result: "맞음" })
        : resultList.push({ currentQuizNumber: i + 1, result: "틀림" });
    }
  }
};

export default Result;
