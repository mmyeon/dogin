import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { getAnswerList, getQuestionList } from "@/entities/quiz/model";
import { InitialStateType } from "../../app/store";
import { Container, Gnb } from "./Styled";
import Reference from "./Reference";
import Report from "./Report";
import ActionArea from "./ActionArea";
import { ResultListType } from "@/entities/quiz/type";

function evaluateUserAnswers(
  userChoiceList: string[],
  answerList: string[]
): ResultListType {
  return userChoiceList.map((choice, index) => ({
    currentQuizNumber: index + 1,
    result: choice === answerList[index] ? "맞음" : "틀림",
  }));
}

const Result = () => {
  const { userChoiceList, questionList, answerList } = useSelector(
    (state: InitialStateType) => {
      return {
        userChoiceList: state.userChoiceList,
        questionList: getQuestionList(state),
        answerList: getAnswerList(state),
      };
    }
  );

  const resultList = evaluateUserAnswers(userChoiceList, answerList);

  return (
    <Container>
      <Gnb>
        <Link to="/" className="link">
          DogIn
        </Link>
      </Gnb>

      <div className="content-container">
        <Report resultList={resultList} questionList={questionList} />
        <Reference />
        <ActionArea />
      </div>
    </Container>
  );
};

export default Result;
