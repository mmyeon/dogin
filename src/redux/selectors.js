import { createSelector } from "reselect";

const quizDataSelector = (state) => state.quizData;

const getQuestionList = createSelector(quizDataSelector, (quizData) => {
  const questionList = quizData.map((quiz) => {
    return {
      imageFileName: quiz["imageFileName"],
      question: quiz["question"],
      titleOnResult: quiz["titleOnResult"],
    };
  });
  return questionList;
});

const getAnswerList = createSelector(quizDataSelector, (quizData) => {
  const answerList = quizData.map((quiz) => {
    return quiz.answer;
  });
  return answerList;
});

export { getQuestionList, getAnswerList };
