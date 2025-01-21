export interface Question {
  imageFileName: string;
  question: string;
  answer: string;
  answerDesc: {
    answerTitle: string;
    explanation: string;
  };
  titleOnResult: string;
}
