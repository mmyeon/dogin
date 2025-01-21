import { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";
import ScrollToTop from "../../shared/utils/ScrollToTop";

const Quiz = () => {
  const [isAnswered, setIsAnswered] = useState(false);

  return (
    <div>
      <ScrollToTop />
      {!isAnswered && <Question setAnswerState={setAnswerState} />}
      {isAnswered && <Answer setAnswerState={setAnswerState} />}
    </div>
  );

  function setAnswerState() {
    setIsAnswered(!isAnswered);
  }
};

export default Quiz;
