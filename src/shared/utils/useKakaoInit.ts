import { useEffect } from "react";

export function useKakaoInit(KAKAO_KEY: string) {
  const { Kakao } = window;

  useEffect(() => {
    Kakao.init(KAKAO_KEY);
  }, [Kakao, KAKAO_KEY]);
}
