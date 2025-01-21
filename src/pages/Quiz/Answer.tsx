import { useEffect } from "react";
import {
  Link,
  withRouter,
  useHistory,
  RouteComponentProps,
} from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { InitialStateType } from "../../app/store";
import { getAnswerList, getQuestionList } from "../../redux/selectors";
import data from "../../data";
import TitleWithBubble from "../../components/TitleWithBubble";
import Card from "../../components/Card";
import Button from "../../components/Button";

const Container = styled.div`
  width: 100vw;
  background: mediumaquamarine;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > .Card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3em 0;

    .answer-title {
      font-weight: 800;
      margin-top: 0.5rem;
      white-space: pre-line;
      word-break: keep-all;
      line-height: 30px;
      font-size: 1.25em;
    }

    .explanation {
      white-space: pre-line;
      margin: 1.4em 0;
      font-weight: 500;
      font-size: 1.05em;
      line-height: 1.3;
    }

    .reference {
      font-weight: 200;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 1rem;
      color: #595656d4;

      > a {
        color: #595656d4;
      }
    }
  }
`;

interface AnswerProps extends RouteComponentProps {
  setAnswerState: () => void;
}

const Answer = ({ setAnswerState }: AnswerProps) => {
  let history = useHistory();

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

  const answerDescList = data.map((item) => {
    return {
      answerDesc: item["answerDesc"],
    };
  });

  const getAnswerDesc = (quizNumber: number) => {
    const answer = answerDescList[quizNumber - 1];
    return answer;
  };

  const {
    answerDesc: { answerTitle, explanation, referenceList },
  } = getAnswerDesc(quizNumber);

  useEffect(() => {
    if (quizNumber > userChoiceList.length) {
      history.push("/");
    }
  }, []);

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

        {referenceList !== undefined && (
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

        {quizNumber < questionList.length ? (
          <Link to={`/quiz/${quizNumber + 1}`}>
            <Button title="NEXT" onClick={setAnswerState} />
          </Link>
        ) : (
          <Link to="/result">
            <Button title="NEXT" />
          </Link>
        )}
      </Card>
    </Container>
  );
};

export default withRouter(Answer);
