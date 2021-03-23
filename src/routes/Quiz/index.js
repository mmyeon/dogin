import React, { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";

const Quiz = () => {
  const [hasResult, setHasResult] = useState(false);

  return (
    <div>
      {!hasResult && <Question setAsAnswered={setAsAnswered} />}
      {hasResult && <Answer />}
    </div>
  );

  /* setAsAnswered로 변경 */
  function setAsAnswered() {
    setHasResult(true);
  }
};

export default Quiz;
