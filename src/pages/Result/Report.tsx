import { List, ListItem, Title } from "./Styled";
import Card from "../Quiz/Card";
import {
  QuestionList,
  ResultListType,
  ResultType,
} from "@/entities/quiz/types";
import TitleWithCircle from "./TitleWithCircle";

const HIGH_SCORE_THRESHOLD = 8;
const MID_SCORE_THRESHOLD = 8;

function evaluateReadiness(correctCount: number): string {
  if (correctCount > HIGH_SCORE_THRESHOLD) {
    return `좋은 보호자가 
      될 수 있을 것 같아요.`;
  } else if (correctCount > MID_SCORE_THRESHOLD) {
    return "부족한 부분이 좀 있네요.";
  } else {
    return `보호자가 되기엔 아직 준비가 더 필요해요.`;
  }
}

function Report({
  resultList,
  questionList,
}: {
  resultList: ResultListType;
  questionList: QuestionList[];
}) {
  const checkAnswer = (resultType: ResultType) => {
    return resultList.filter(({ result }) => result === resultType);
  };

  const correctAnswerCount = checkAnswer("맞음").length;
  const hasInCorrectAnswer = checkAnswer("틀림").length > 0;

  return (
    <Card borderType="special">
      <TitleWithCircle title={"나의 결과는?"} />
      <section className="upper-section">
        <Title>{evaluateReadiness(correctAnswerCount)}</Title>

        <div className="score-container">
          <img src="./assets/pet-love.png" alt="pet love" />
          <span>
            {Math.floor((correctAnswerCount / questionList.length) * 100)}점
          </span>
        </div>
      </section>

      {hasInCorrectAnswer && (
        <section className="lower-section">
          <Title>
            입양하기 전 <br></br>다시 확인해보세요
          </Title>

          <List>
            {checkAnswer("틀림").map((item, i) => (
              <ListItem key={i.toString()} fontSize="big" borderBottom>
                {`🐶 ${
                  questionList[item.currentQuizNumber - 1]["titleOnResult"]
                }`}
              </ListItem>
            ))}
          </List>
        </section>
      )}
    </Card>
  );
}

export default Report;
