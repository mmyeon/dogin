import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Quiz from "./routes/Quiz";
import data from "./data";
import Result from "./routes/Result";

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
      <Route path="/result" exact component={Result} />
    </Router>
  );
};

export default DefaultRouter;
