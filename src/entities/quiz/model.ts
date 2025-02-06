import { InitialStateType } from "@/app/store";
import { createSelector } from "reselect";
import { QuestionList } from "./type";

const quizDataSelector = (state: InitialStateType) => state.quizData;

const getQuestionList = createSelector(
  quizDataSelector,
  (quizData): QuestionList[] => {
    const questionList = quizData.map((quiz) => {
      return {
        imageFileName: quiz["imageFileName"],
        question: quiz["question"],
        titleOnResult: quiz["titleOnResult"],
      };
    });
    return questionList;
  }
);

const getAnswerList = createSelector(quizDataSelector, (quizData) => {
  const answerList = quizData.map((quiz) => {
    return quiz.answer;
  });
  return answerList;
});

export { getQuestionList, getAnswerList };
