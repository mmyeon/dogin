import React, { useContext, useState } from "react";
const QuestionContext = React.createContext();

export const QuestionProvider = ({ data, children }) => {
  const [questionNum, setQuestionNum] = useState(1);
  const questionList = data.map((item, i) => item[i + 1]["question"]);
  const answerList = data.map((item, i) => item[i + 1]["answer"]);

  const getAnswer = (questionNum) => {
    const currentIndex = questionNum - 1;
    return answerList[currentIndex];
  };

  const getQuestion = (questionNum) => {
    const currentIndex = questionNum - 1;
    return questionList[currentIndex];
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
