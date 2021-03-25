import React, { useContext, useState } from "react";
const ContentContext = React.createContext();

export const ContentProvider = ({ data, children }) => {
  const [currentQuizNumber, setCurrentQuizNumber] = useState(1);
  const [userChoiceList, setUserChoiceList] = useState([]);

  const questionList = data.map((item) => {
    return {
      key: item["key"],
      imageFileName: item["imageFileName"],
      question: item["question"],
    };
  });

  const answerDescList = data.map((item) => {
    return {
      answerDesc: item["answerDesc"],
    };
  });

  const answerList = data.map((item) => item.answer);

  const getQuestion = (currentQuizNumber) => {
    const question = questionList[currentQuizNumber - 1];
    return question;
  };

  const getAnswerDesc = (currentQuizNumber) => {
    const answer = answerDescList[currentQuizNumber - 1];
    return answer;
  };

  return (
    <ContentContext.Provider
      value={{
        currentQuizNumber,
        setCurrentQuizNumber,
        getQuestion,
        getAnswerDesc,
        setUserChoiceList,
        userChoiceList,
        questionList,
        answerDescList,
        answerList,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useCurrentQuizNumber = () => {
  const { currentQuizNumber } = useContext(ContentContext);
  return currentQuizNumber;
};

export const useSetCurrentQuizNumber = () => {
  const { setCurrentQuizNumber } = useContext(ContentContext);
  return setCurrentQuizNumber;
};

export const useGetQuestion = () => {
  const { getQuestion } = useContext(ContentContext);
  return getQuestion;
};

export const useGetAnswerDesc = () => {
  const { getAnswerDesc } = useContext(ContentContext);
  return getAnswerDesc;
};

export const useUserChoiceList = () => {
  const { userChoiceList } = useContext(ContentContext);
  return userChoiceList;
};

export const useSetUserChoiceList = () => {
  const { setUserChoiceList } = useContext(ContentContext);
  return setUserChoiceList;
};

export const useQuestionList = () => {
  const { questionList } = useContext(ContentContext);
  return questionList;
};
export const useAnswerList = () => {
  const { answerList } = useContext(ContentContext);
  return answerList;
};
export default ContentProvider;
