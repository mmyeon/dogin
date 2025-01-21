import { useEffect } from "react";
import Router from "./app/Router";
import GlobalStyles from "./app/styles/GlobalStyles";
import { CustomQueryClientProvider } from "./app/providers/CustomQueryClientProvider";
import ReduxProvider from "./app/providers/ReduxProvider";

const App = () => {
  const { Kakao } = window;
  const KAKAO_KEY = import.meta.env.VITE_KAKAO_KEY;

  useEffect(() => {
    Kakao.init(KAKAO_KEY);
  }, [Kakao, KAKAO_KEY]);

  return (
    <CustomQueryClientProvider>
      <ReduxProvider>
        <Router />
        <GlobalStyles />
      </ReduxProvider>
    </CustomQueryClientProvider>
  );
};

export default App;
