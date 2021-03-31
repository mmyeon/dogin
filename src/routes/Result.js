import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useAnswerList, useQuestionList, useUserChoiceList } from "../context";
import TitleWithCircle from "../components/TitleWithCircle";

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  /* margin-top: 20px; */
  line-height: 30px;
  word-break: keep-all;
`;

const List = styled.ul`
  width: 100%;
`;

const ListItem = styled.li`
  padding-top: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  text-align: left;
  font-size: ${(props) => (props.fontSize === "big" ? "20px" : "14px")};
  padding-left: 10px;

  > a {
    color: black;
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: mediumaquamarine;
  position: relative;
  overflow: scroll;

  .Card {
    margin-top: 4rem;

    > .upper-section {
      width: 100%;
      padding-bottom: 1rem;
      border-bottom: 2px dashed #000000b5;

      > .heart-container {
        display: inline-flex;
        align-items: center;

        > img {
          width: 80px;
          height: 80px;
          margin: 8px 0;
        }

        > span {
          margin-left: -20px;
          background: #cb2527;
          color: white;
          padding: 9px 25px;
          border: 3px solid black;
          border-radius: 20px;
          font-size: 14px;
          z-index: -1;
          letter-spacing: 1px;
        }
      }
    }
    > .lower-section {
      width: 100%;
    }
  }
`;

const Result = () => {
  const userChoiceList = useUserChoiceList();
  const answerList = useAnswerList();
  const questionList = useQuestionList();
  let resultList = [];

  checkResult();

  const correctAnswerNumber = resultList.filter(
    (answer) => answer.result === "맞음"
  ).length;

  const incorrectAnswerList = resultList.filter(
    (answer) => answer.result === "틀림"
  );

  console.log("incorrectAnswerList", incorrectAnswerList);

  return (
    <Background>
      <Card borderType="special">
        <TitleWithCircle title={"나의 결과는?"} />

        <section className="upper-section">
          <Title>{showScore()}</Title>
          <div className="heart-container">
            <img src="./assets/pet-love.png" alt="pet love" />
            <span>
              {userChoiceList.length}개 중 {correctAnswerNumber}개 충족
            </span>
          </div>
        </section>

        {correctAnswerNumber !== 9 && (
          <section className="lower-section">
            <Title>
              입양하기 전 <br></br>더 고민해보세요
            </Title>

            <List>
              {incorrectAnswerList.map((item, i) => (
                <ListItem key={i.toString()} fontSize="big">
                  {questionList[item.currentQuizNumber - 1]["key"]}
                </ListItem>
              ))}
            </List>
          </section>
        )}
      </Card>

      <Card borderType="special">
        <TitleWithCircle title={"출처"} />

        <section className="upper-section">
          <Title>콘텐츠 출처</Title>
          <List>
            <ListItem>개를 키울 수 있는 자격 / 셀리나 델 아모</ListItem>
            <ListItem>
              <a
                href="https://news.mt.co.kr/mtview.php?no=2020092709474249329&VN"
                target="_blank"
                rel="noreferrer"
              >
                "강아지 귀여워, 키울래!"…1000만원 있으세요?"
              </a>
            </ListItem>
            <ListItem>
              <a
                href="http://www.koreadognews.co.kr/news/view.php?no=2636"
                target="_blank"
                rel="noreferrer"
              >
                소비자들의 알권리, 반려동물 진료비만 예외인가?...
              </a>
            </ListItem>
          </List>
        </section>

        <section className="lower-section">
          <Title>아이콘 출처</Title>
          <List>
            <ListItem>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/photo3idea-studio"
                title="photo3idea_studio"
              >
                photo3idea_studio
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </ListItem>
            <ListItem>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/eucalyp"
                title="Eucalyp"
              >
                Eucalyp
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </ListItem>
            <ListItem>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/iconixar"
                title="iconixar"
              >
                iconixar
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </ListItem>
            <ListItem>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/mangsaabguru"
                title="mangsaabguru"
              >
                mangsaabguru
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </ListItem>
            <ListItem>
              Icons made by{" "}
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </ListItem>
          </List>
        </section>
      </Card>
    </Background>
  );

  function checkResult() {
    for (let i = 0; i < userChoiceList.length; i++) {
      userChoiceList[i] === answerList[i]
        ? resultList.push({ currentQuizNumber: i + 1, result: "맞음" })
        : resultList.push({ currentQuizNumber: i + 1, result: "틀림" });
    }
  }

  function showScore() {
    if (correctAnswerNumber > 8) {
      return `좋은 보호자가 
      될 수 있을 것 같아요.`;
    } else if (correctAnswerNumber > 6) {
      return "부족한 부분이 좀 있네요.";
    } else {
      return `보호자가 되기엔 아직 준비가 더 필요해요.`;
    }
  }
};

export default Result;
