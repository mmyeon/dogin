import React from "react";
import { useUserAnswerList } from "../context";

const Review = () => {
  const userAnswerList = useUserAnswerList();

  return (
    <section>
      <h1>
        Yes :{" "}
        {userAnswerList.filter((answer) => answer.userAnswer === "YES").length}
      </h1>
      <h2>
        {userAnswerList
          .filter((answer) => answer.userAnswer === "YES")
          .map((item) => `${item.questionNumber} 번 문제, `)}
      </h2>
      <h1>
        No :{" "}
        {userAnswerList.filter((answer) => answer.userAnswer === "NO").length}{" "}
      </h1>
      <h2>
        {userAnswerList
          .filter((answer) => answer.userAnswer === "NO")
          .map((item) => `${item.questionNumber} 번 문제, `)}
      </h2>
    </section>
  );
};

export default Review;
