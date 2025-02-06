import Router from "./app/Router";
import GlobalStyles from "./app/styles/GlobalStyles";
import { CustomQueryClientProvider } from "./app/providers/CustomQueryClientProvider";
import ReduxProvider from "./app/providers/ReduxProvider";
import { useKakaoInit } from "./app/hooks/useKakaoInit";

const KAKAO_KEY = import.meta.env.VITE_KAKAO_KEY;

const App = () => {
  useKakaoInit(KAKAO_KEY);

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
