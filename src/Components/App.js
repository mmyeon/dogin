import React from "react";
import Question from "../context";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import data from "../data";

const App = () => {
  return (
    <Question data={data}>
      <Router />
      <GlobalStyles />
    </Question>
  );
};

export default App;
