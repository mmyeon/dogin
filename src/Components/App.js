import React from "react";
import QuestionProvider from "../context";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import data from "../data";

const App = () => {
  return (
    <QuestionProvider data={data}>
      <Router />
      <GlobalStyles />
    </QuestionProvider>
  );
};

export default App;
