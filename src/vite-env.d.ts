// <reference types="vite/client" />
declare global {
  interface Window {
    Kakao: any;
  }
}

// 파일이 모듈로 인식되도록 하기 위해서 추가
export {};
