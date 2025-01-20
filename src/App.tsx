import { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  const { Kakao } = window;
  const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;

  useEffect(() => {
    Kakao.init(KAKAO_KEY);
  }, [Kakao, KAKAO_KEY]);

  return (
    <Provider store={store}>
      <Router />
      <GlobalStyles />
    </Provider>
  );
};

export default App;
