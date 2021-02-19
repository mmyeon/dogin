import React, { useContext, useState } from "react";

// export const QuestionContext = React.createContext();
const QuestionContext = React.createContext();

export const Question = ({ children, data }) => {
  const [questionNum, setQuestionNum] = useState(1);

  const getQuestion = (questionNum) => {
    return data[questionNum]["question"];
  };

  return (
    <QuestionContext.Provider value={{ questionNum, getQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionNum = () => {
  const { questionNum } = useContext(QuestionContext);
  return questionNum;
};

export const useGetQuestion = () => {
  const { getQuestion } = useContext(QuestionContext);
  return getQuestion;
};

export default Question;
