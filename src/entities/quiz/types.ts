interface Question {
  imageFileName: string;
  question: string;
  answer: string;
  answerDesc: {
    answerTitle: string;
    explanation: string;
  };
  titleOnResult: string;
}

type QuestionList = {
  imageFileName: string;
  question: string;
  titleOnResult: string;
};

type ResultType = "맞음" | "틀림";
type ResultListType = {
  currentQuizNumber: number;
  result: ResultType;
}[];

export type { Question, ResultListType, ResultType, QuestionList };
