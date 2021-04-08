import React from "react";
import ContentProvider from "./context";
import GlobalStyles from "../src/GlobalStyles";
import Router from "./Router";
import data from "./data";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

const App = () => {
  return (
    <ContentProvider data={data}>
      <HelmetProvider context={helmetContext}>
        <Router />
        <GlobalStyles />
      </HelmetProvider>
    </ContentProvider>
  );
};

export default App;
