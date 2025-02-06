import { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";
import useScrollToTop from "./hooks/useScrollToTop";

const Quiz = () => {
  const [mode, setMode] = useState<"question" | "answer">("question");
  useScrollToTop();

  return (
    <>
      {mode === "question" && <Question changeMode={() => setMode("answer")} />}
      {mode === "answer" && <Answer changeMode={() => setMode("question")} />}
    </>
  );
};

export default Quiz;
