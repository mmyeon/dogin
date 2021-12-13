import React, { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  const { Kakao } = window;
  const KAKAO_KEY = "19da7d5b72a371eb93bc0ab13606c4e7";

  useEffect(() => {
    Kakao.init(KAKAO_KEY);
  }, []);

  return (
    <Provider store={store}>
      <Router />
      <GlobalStyles />
    </Provider>
  );
};

export default App;
