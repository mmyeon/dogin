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

  function setAsAnswered() {
    setHasResult(true);
  }
};

export default Quiz;
