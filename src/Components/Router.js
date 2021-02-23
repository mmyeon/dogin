import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Question from "../Routes/Question";
import { useQuestionNum } from "../context";

const DefaultRouter = () => {
  const questionNum = useQuestionNum();

  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path={`/question${questionNum}`} component={Question} />
    </Router>
  );
};

export default DefaultRouter;
