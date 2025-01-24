import { BaseSyntheticEvent, useEffect } from "react";
import { withRouter, useParams, RouteComponentProps } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getQuestionList } from "@/entities/quiz/model";
import QuestionContainer from "./Styled";
import {
  InitialStateType,
  updateCurrentQuizNumber,
  updateUserChoiceList,
} from "@/app/store";
import Card from "@/shared/ui/Card";
import Choice from "@/shared/ui/Choice";

interface QuestionProps extends RouteComponentProps {
  changeMode: () => void;
}

const Question = ({ changeMode }: QuestionProps) => {
  const { quizNumber } = useParams<{ quizNumber: string }>();
  const currentQuizNumber = parseInt(quizNumber);

  const { questionList } = useSelector((state: InitialStateType) => {
    return {
      questionList: getQuestionList(state),
    };
  });

  const { question, imageFileName } = questionList[currentQuizNumber - 1];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCurrentQuizNumber(currentQuizNumber));
  }, []);

  const updateResult = (e: BaseSyntheticEvent) => {
    changeMode();
    const userChoice = e.target.innerText;
    dispatch(updateUserChoiceList(userChoice));
  };

  return (
    <QuestionContainer>
      <Card>
        <ul className="indicator">
          {questionList.map((_, i) => (
            <li
              key={i.toString()}
              className={i + 1 === currentQuizNumber ? "current" : ""}
            >
              {i + 1}
            </li>
          ))}
        </ul>

        <section className="content">
          <img
            src={`/assets/${imageFileName}`}
            alt={imageFileName.slice(
              0,
              imageFileName.match(/.png/)?.index || imageFileName.length
            )}
          />

          {question && <h1>{question}</h1>}

          <Choice onClick={updateResult} />
        </section>
      </Card>
    </QuestionContainer>
  );
};

export default withRouter(Question);
