import React, { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";

const Quiz = () => {
  const [hasResult, setHasResult] = useState(false);

  return (
    <div>
      {!hasResult && <Question handleResult={handleResult} />}
      {hasResult && <Answer />}
    </div>
  );

  function handleResult() {
    setHasResult(true);
  }
};

export default Quiz;
