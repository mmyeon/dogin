import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Question from "../Routes/Question";

const DefaultRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/question" component={Question} />
    </Router>
  );
};

export default DefaultRouter;
