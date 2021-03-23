import React from "react";
import { useAnswerList, useUserChoiceList } from "../context";

const Result = () => {
  const userChoiceList = useUserChoiceList();
  const answerList = useAnswerList();
  const correctAnswerList = answerList.map(
    (item) => item["answer"]["correctAnswer"]
  );

  console.log("answerList", answerList);

  let resultList = [];

  checkResult();

  const correctNumber = resultList.filter(
    (answer) => answer.answerResult === "맞음"
  ).length;

  const incorrectNumber = resultList.filter(
    (answer) => answer.answerResult === "틀림"
  ).length;

  return (
    <section>
      <h1>맞음 : {correctNumber}</h1>
      <h2>
        {resultList
          .filter((answer) => answer.answerResult === "맞음")
          .map((item) => `${item.currentQuizNumber} 번 문제, `)}
      </h2>
      <h1>틀림 : {incorrectNumber} </h1>
      <h2>
        {resultList
          .filter((answer) => answer.answerResult === "틀림")
          .map((item) => `${item.currentQuizNumber} 번 문제, `)}
      </h2>
    </section>
  );

  function checkResult() {
    for (let i = 0; i < userChoiceList.length; i++) {
      userChoiceList[i]["userChoice"] === correctAnswerList[i]
        ? resultList.push({ currentQuizNumber: i + 1, answerResult: "맞음" })
        : resultList.push({ currentQuizNumber: i + 1, answerResult: "틀림" });
    }
  }
};

export default Result;
