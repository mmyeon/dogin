import { useEffect } from "react";
import {
  Link,
  withRouter,
  useHistory,
  RouteComponentProps,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { getAnswerList, getQuestionList } from "@/entities/quiz/model";

import Container from "./Styled";
import { InitialStateType } from "@/app/store";
import TitleWithBubble from "@/shared/ui/TitleWithBubble";
import Card from "@/pages/Quiz/Card";
import Button from "@/shared/ui/Button";
import questions from "@/entities/quiz/questionData";

interface AnswerProps extends RouteComponentProps {
  changeMode: () => void;
}

const Answer = ({ changeMode }: AnswerProps) => {
  const history = useHistory();

  const { questionList, answerList, userChoiceList, quizNumber } = useSelector(
    (state: InitialStateType) => {
      return {
        questionList: getQuestionList(state),
        answerList: getAnswerList(state),
        userChoiceList: state.userChoiceList,
        quizNumber: state.currentQuizNumber,
      };
    }
  );

  const answerDescList = questions.map((question) => {
    return {
      answerDesc: question["answerDesc"],
    };
  });

  const {
    answerDesc: { answerTitle, explanation, referenceList },
  } = answerDescList[quizNumber - 1];

  // 중간 문제부터 접근하는 경우 홈으로 이동
  useEffect(() => {
    if (quizNumber > userChoiceList.length) {
      history.push("/");
    }
  }, []);

  const isLastQuiz = quizNumber === questionList.length;
  const nextLink = isLastQuiz ? `/result` : `/quiz/${quizNumber + 1}`;

  return (
    <Container>
      <Card>
        {
          <TitleWithBubble
            title={
              userChoiceList[quizNumber - 1] === answerList[quizNumber - 1]
                ? "Great"
                : "No No"
            }
          />
        }
        <h1 className="answer-title">{answerTitle}</h1>
        <p className="explanation">{explanation}</p>
        {referenceList && (
          <span className="reference">
            <h3>출처</h3>
            {referenceList.map((reference, i) => (
              <a
                key={i.toString()}
                href={reference.link}
                target="_blank"
                rel="noreferrer"
              >
                {reference.title}
              </a>
            ))}
          </span>
        )}
        <Link to={nextLink}>
          <Button title="NEXT" onClick={isLastQuiz ? undefined : changeMode} />
        </Link>
      </Card>
    </Container>
  );
};

export default withRouter(Answer);
