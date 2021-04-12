import React, { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";
import ScrollToTop from "../../components/ScrollToTop";

const Quiz = () => {
  const [hasResult, setHasResult] = useState(false);

  return (
    <div>
      <ScrollToTop />
      {!hasResult && <Question setAsAnswered={setAsAnswered} />}
      {hasResult && <Answer />}
    </div>
  );

  function setAsAnswered() {
    setHasResult(true);
  }
};

export default Quiz;
