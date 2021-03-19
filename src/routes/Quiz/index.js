import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const Quiz = () => {
  const [hasResult, setHasResult] = useState(false);

  return (
    <div>
      {!hasResult && <Question handleResult={handleResult} />}
      {hasResult && <Result />}
    </div>
  );

  function handleResult() {
    setHasResult(true);
  }
};

export default Quiz;
