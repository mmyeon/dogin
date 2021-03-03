import React from "react";
import { useUserAnswerList } from "../context";
import data from "../data";

const Review = () => {
  const userAnswerList = useUserAnswerList();
  const correctAnswerList = data.map(
    (item, i) => item[i + 1]["questionAnswer"]
  );

  let resultList = [];

  function checkResult() {
    for (let i = 0; i < userAnswerList.length; i++) {
      userAnswerList[i]["userAnswer"] === correctAnswerList[i]
        ? resultList.push({ questionNumber: i + 1, answerResult: "맞음" })
        : resultList.push({ questionNumber: i + 1, answerResult: "틀림" });
    }
  }

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
          .map((item) => `${item.questionNumber} 번 문제, `)}
      </h2>
      <h1>틀림 : {incorrectNumber} </h1>
      <h2>
        {resultList
          .filter((answer) => answer.answerResult === "틀림")
          .map((item) => `${item.questionNumber} 번 문제, `)}
      </h2>
    </section>
  );
};

export default Review;
