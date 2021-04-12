import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import { useAnswerList, useQuestionList, useUserChoiceList } from "../context";
import TitleWithCircle from "../components/TitleWithCircle";
import { contentReferenceList, iconReferenceList } from "../reference";
import { device, size } from "../breakpoints";

const Gnb = styled.div`
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  background-color: #fffffffa;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 rgb(12 13 14 / 15%);

  > .link {
    font-size: 30px;
    color: #66cdaa;
    font-weight: bold;
    font-family: Poppins;
  }
`;

const Container = styled.div`
  width: 100vw;
  background: mediumaquamarine;
  position: relative;
  overflow: scroll;
  padding-top: 2em;
  padding-bottom: 1.4em;

  .content-container {
    max-width: 389px;
    margin: 0 auto;
    position: relative;

    .Card {
      padding: 1.3em;
      margin-top: 4rem;

      > .upper-section {
        width: 100%;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 2px dashed #000000b5;

        > .score-container {
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
            padding: 0.6em 1.2em;
            border: 3px solid black;
            border-radius: 20px;
            font-size: 15px;
            z-index: -1;
            letter-spacing: 1px;
          }
        }
      }

      > .lower-section {
        width: 100%;
      }
    }

    .action-container {
      z-index: 10;
      position: fixed;
      top: 68%;

      @media (max-width: ${size.mobileM}) {
        left: 5px;
      }

      @media ${device.mobileM} {
        margin-left: -19px;
      }

      > .home-url {
        opacity: 0;
        width: 20px;
      }

      > .btn-container {
        background: #ffd767;
        display: flex;
        flex-direction: column;
        border-radius: 50px;

        button {
          margin: 5px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          width: 36px;
          height: 36px;
          cursor: pointer;

          &:focus {
            outline: none;
          }

          > img {
            width: 20px;
            height: 20px;
            padding: 2px;
          }
        }

        .shareBtn {
          background: #cae97d;
        }

        .homeBtn {
          background: #a77deb;
        }
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  line-height: 30px;
  word-break: keep-all;
  padding: 0px 1em;
`;

const List = styled.ul`
  width: 100%;
`;

const ListItem = styled.li`
  padding-top: 10px;
  padding-bottom: 5px;
  line-height: 1.3em;
  border-bottom: ${(props) => (props.borderBottom ? "1px solid black" : 0)};
  text-align: left;
  font-size: ${(props) => (props.fontSize === "big" ? "16px" : "0.9em")};
  padding-left: 10px;
  font-weight: 200;
  word-break: keep-all;

  > a {
    color: black;
  }
`;

const Result = () => {
  const userChoiceList = useUserChoiceList();
  const answerList = useAnswerList();
  const questionList = useQuestionList();
  let resultList = [];
  const urlInput = useRef(null);

  checkResult();

  const correctAnswerNumber = resultList.filter(
    (answer) => answer.result === "맞음"
  ).length;

  const incorrectAnswerList = resultList.filter(
    (answer) => answer.result === "틀림"
  );

  return (
    <Container>
      <Gnb>
        <Link to="/" className="link">
          DogIn{" "}
        </Link>
      </Gnb>

      <div className="content-container">
        <Card borderType="special">
          <TitleWithCircle title={"나의 결과는?"} />

          <section className="upper-section">
            <Title>{showResult()}</Title>
            <div className="score-container">
              <img src="./assets/pet-love.png" alt="pet love" />
              <span>
                {userChoiceList.length}개 중 {correctAnswerNumber}개 충족
              </span>
            </div>
          </section>

          {correctAnswerNumber !== 9 && (
            <section className="lower-section">
              <Title>
                입양하기 전 <br></br>다시 확인해보세요
              </Title>

              <List>
                {incorrectAnswerList.map((item, i) => (
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

        <Card borderType="special">
          <TitleWithCircle title={"출처"} />

          <section className="upper-section">
            <Title>콘텐츠 출처</Title>
            <List>
              {contentReferenceList.map((reference, i) => (
                <ListItem key={i.toString()}>
                  👉{" "}
                  {reference.link ? (
                    <a href={reference.link} target="_blank" rel="noreferrer">
                      {reference.title}
                    </a>
                  ) : (
                    reference.title
                  )}
                </ListItem>
              ))}
            </List>
          </section>

          <section className="lower-section">
            <Title>아이콘 출처</Title>
            <List>
              {iconReferenceList.map((reference, i) => (
                <ListItem key={i.toString()}>
                  👉 Icons made by{" "}
                  {
                    <a href={reference.link} title={reference.title}>
                      {reference.title}
                    </a>
                  }{" "}
                  from{" "}
                  {
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      www.flaticon.com
                    </a>
                  }
                </ListItem>
              ))}
            </List>
          </section>
        </Card>

        <div className="action-container">
          <input
            type="text"
            className="home-url"
            value="https://dogin.mmyeon.com"
            readOnly
            ref={urlInput}
          />
          <div className="btn-container">
            <Link to="/">
              <button className="homeBtn">
                <img src="/assets/home.png" alt="home" />
              </button>
            </Link>
            <button className="shareBtn" onClick={copyToClipboard}>
              <img src="/assets/share.png" alt="share" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );

  function checkResult() {
    for (let i = 0; i < userChoiceList.length; i++) {
      userChoiceList[i] === answerList[i]
        ? resultList.push({ currentQuizNumber: i + 1, result: "맞음" })
        : resultList.push({ currentQuizNumber: i + 1, result: "틀림" });
    }
  }

  function showResult() {
    if (correctAnswerNumber > 8) {
      return `좋은 보호자가 
      될 수 있을 것 같아요.`;
    } else if (correctAnswerNumber > 6) {
      return "부족한 부분이 좀 있네요.";
    } else {
      return `보호자가 되기엔 아직 준비가 더 필요해요.`;
    }
  }

  function copyToClipboard() {
    const homeUrlInput = urlInput.current;
    homeUrlInput.select();
    document.execCommand("copy");
    window.alert("주소가 복사되었습니다. 친구에게 공유해보세요 😊");
  }
};

export default Result;
