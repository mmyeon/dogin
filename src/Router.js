import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Quiz from "./routes/Quiz";
import data from "./data";
import Review from "./routes/Review";

const DefaultRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      {data.map((question, i) => {
        return (
          <Route
            key={i.toString()}
            path={`/quiz/${i + 1}`}
            exact
            component={Quiz}
          />
        );
      })}
      <Route path="/review" exact component={Review} />
    </Router>
  );
};

export default DefaultRouter;
