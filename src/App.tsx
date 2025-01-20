import { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  const { Kakao } = window;
  const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;

  useEffect(() => {
    Kakao.init(KAKAO_KEY);
  }, [Kakao, KAKAO_KEY]);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router />
        <GlobalStyles />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
