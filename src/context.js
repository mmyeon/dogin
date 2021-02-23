import React, { useContext, useState } from "react";

const QuestionContext = React.createContext();

export const QuestionProvider = ({ children, data }) => {
  const [questionNum, setQuestionNum] = useState(1);

  const getQuestion = (questionNum) => {
    return data[questionNum]["question"];
  };

  const getDetail = (questionNum) => {
    return data[questionNum]["detail"];
  };

  return (
    <QuestionContext.Provider
      value={{ questionNum, setQuestionNum, getQuestion, getDetail }}
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

export const useGetDetail = () => {
  const { getDetail } = useContext(QuestionContext);
  return getDetail;
};

export default QuestionProvider;
