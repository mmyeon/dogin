import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Question1 from "../Routes/Question1";

const DefaultRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/question1" component={Question1} />
    </Router>
  );
};

export default DefaultRouter;
