import React, { useContext, useState } from "react";

// export const QuestionContext = React.createContext();
const QuestionContext = React.createContext();

export const Question = ({ children, data }) => {
  const [questionNum, setQuestionNum] = useState(1);

  return (
    <QuestionContext.Provider value={{ questionNum }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionNum = () => {
  const { questionNum } = useContext(QuestionContext);

  return questionNum;
};

export default Question;
