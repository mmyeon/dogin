import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <GlobalStyles />
    </Provider>
  );
};

export default App;
