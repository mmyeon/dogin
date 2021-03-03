import React, { useContext, useState } from "react";
const QuestionContext = React.createContext();

export const QuestionProvider = ({ data, children }) => {
  const [questionNum, setQuestionNum] = useState(1);
  // TODO: 유저가 선택한 값 저장하기
  const [userAnswerList, setUserAnswerList] = useState([]);
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
      value={{
        questionNum,
        setQuestionNum,
        getQuestion,
        getAnswer,
        userAnswerList,
        setUserAnswerList,
      }}
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

// TODO: userAnswerList 변경하기
export const useUserAnswerList = () => {
  const { userAnswerList } = useContext(QuestionContext);
  return userAnswerList;
};

export const useSetUserAnswerList = () => {
  const { setUserAnswerList } = useContext(QuestionContext);
  return setUserAnswerList;
};

export default QuestionProvider;
