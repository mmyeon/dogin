import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Question from "../Routes/Question";
import data from "../data";
import Review from "./Review";

const DefaultRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      {data.map((question, i) => {
        return (
          <Route
            key={i}
            path={`/question/${i + 1}`}
            exact
            component={Question}
          />
        );
      })}
      <Route path="/review" exact component={Review} />
    </Router>
  );
};

export default DefaultRouter;
