import React, { useContext, useState } from "react";

const QuestionContext = React.createContext();

export const QuestionProvider = ({ children, questionList, answerList }) => {
  const [questionNum, setQuestionNum] = useState(1);

  const getQuestion = (questionNum) => {
    const currentIndex = questionNum - 1;
    return questionList[currentIndex];
  };

  const getAnswer = (questionNum) => {
    const currentIndex = questionNum - 1;
    return answerList[currentIndex];
  };

  return (
    <QuestionContext.Provider
      value={{ questionNum, setQuestionNum, getQuestion, getAnswer }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export const useSetQuestionNum = () => {
  const { setQuestionNum } = useContext(QuestionContext);
  return setQuestionNum;
};

export const useQuestionNum = () => {
  const { questionNum } = useContext(QuestionContext);
  return questionNum;
};

export const useGetQuestion = () => {
  const { getQuestion } = useContext(QuestionContext);
  return getQuestion;
};

export const useGetAnswer = () => {
  const { getAnswer } = useContext(QuestionContext);
  return getAnswer;
};

export default QuestionProvider;
