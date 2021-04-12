import React from "react";
import ContentProvider from "./context";
import GlobalStyles from "../src/GlobalStyles";
import Router from "./Router";
import data from "./data";

const App = () => {
  return (
    <ContentProvider data={data}>
      <Router />
      <GlobalStyles />
    </ContentProvider>
  );
};

export default App;
