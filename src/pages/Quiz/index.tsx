import { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";
import useScrollToTop from "../../shared/utils/useScrollToTop";

const Quiz = () => {
  const [isQuestionMode, setIsQuestionMode] = useState<boolean>(true);
  useScrollToTop();

  return (
    <>
      {isQuestionMode ? (
        <Question changeMode={() => setIsQuestionMode(false)} />
      ) : (
        <Answer changeMode={() => setIsQuestionMode(true)} />
      )}
    </>
  );
};

export default Quiz;
