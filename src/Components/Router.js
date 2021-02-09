import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Qustion1 from "../Routes/Question1";

const defaultRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/question1" exact component={Qustion1} />
    </Router>
  );
};

export default defaultRouter;
