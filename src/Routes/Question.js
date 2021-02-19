import React, { useState } from "react";
import Answers from "../Components/Answers";
import Detail from "../Components/Detail";

const Question1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [questionNum, setQuestionNum] = useState(1);

  function handleDetail() {
    setIsVisible(true);
    console.log(questionNum);
  }

  return (
    <>
      <div>Question1</div>
      <Answers onClick={handleDetail} />
      {isVisible && (
        <Detail questionNum={questionNum} setQuestionNum={setQuestionNum} />
      )}
    </>
  );
};

export default Question1;
