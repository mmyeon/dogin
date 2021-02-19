import React, { useState } from "react";
import Answers from "../Components/Answers";
import Detail from "../Components/Detail";
import { useQuestionNum } from "../context";

const Question = () => {
  const questionNum = useQuestionNum();
  console.log("questionNum", questionNum);

  const [isVisible, setIsVisible] = useState(false);

  function handleDetail() {
    setIsVisible(true);
    console.log(questionNum);
  }

  return (
    <>
      <h1>{questionNum}</h1>
      <div>Question1</div>
      <Answers onClick={handleDetail} />
      {/* {isVisible && (
        <Detail questionNum={questionNum} setQuestionNum={setQuestionNum} />
      )} */}
    </>
  );
};

export default Question;
