import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Quiz from "./routes/Quiz";
import Result from "./routes/Result";

const DefaultRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/quiz/:quizNumber" exact component={Quiz} />
      <Route path="/result" exact component={Result} />
    </Router>
  );
};

export default DefaultRouter;
