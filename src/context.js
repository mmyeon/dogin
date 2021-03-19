import React, { useContext, useState } from "react";
const ContentContext = React.createContext();

export const ContentProvider = ({ data, children }) => {
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
    <ContentContext.Provider
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
    </ContentContext.Provider>
  );
};

export const useSetQuestionNum = () => {
  const { setQuestionNum } = useContext(ContentContext);
  return setQuestionNum;
};

export const useQuestionNum = () => {
  const { questionNum } = useContext(ContentContext);
  return questionNum;
};

export const useGetQuestion = () => {
  const { getQuestion } = useContext(ContentContext);
  return getQuestion;
};

export const useGetAnswer = () => {
  const { getAnswer } = useContext(ContentContext);
  return getAnswer;
};

// TODO: userAnswerList 변경하기
export const useUserAnswerList = () => {
  const { userAnswerList } = useContext(ContentContext);
  return userAnswerList;
};

export const useSetUserAnswerList = () => {
  const { setUserAnswerList } = useContext(ContentContext);
  return setUserAnswerList;
};

export default ContentProvider;
