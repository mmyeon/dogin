// <reference types="react-scripts" />
declare global {
  interface Window {
    Kakao: any;
  }
}

// 파일이 모듈로 인식되도록 하기 위해서 추가
// 전역 탕비 선언이 올바르게 작동
export {};
