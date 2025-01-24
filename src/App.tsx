import Router from "./app/Router";
import GlobalStyles from "./app/styles/GlobalStyles";
import { CustomQueryClientProvider } from "./app/providers/CustomQueryClientProvider";
import ReduxProvider from "./app/providers/ReduxProvider";
import { useKakaoInit } from "./shared/utils/useKakaoInit";

const App = () => {
  const KAKAO_KEY = import.meta.env.VITE_KAKAO_KEY;

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
