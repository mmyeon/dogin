import React, { useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Question from "../Routes/Question";
import { useQuestionNum } from "../context";

const DefaultRouter = () => {
  const questionNum = useQuestionNum();

  // TODO: state 변경되었는지 확인하기
  useEffect(() => {
    console.log("Router", questionNum);
  }, [questionNum]);

  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path={`/question/${questionNum}`} component={Question} />
    </Router>
  );
};

export default DefaultRouter;
