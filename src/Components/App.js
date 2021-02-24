import React from "react";
import QuestionProvider from "../context";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import { questionList, answerList } from "../data";

const App = () => {
  return (
    <QuestionProvider questionList={questionList} answerList={answerList}>
      <Router />
      <GlobalStyles />
    </QuestionProvider>
  );
};

export default App;
