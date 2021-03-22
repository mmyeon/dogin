import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  useGetQuestion,
  useSetUserAnswerList,
  useUserAnswerList,
} from "../../context";
import Choice from "../../components/Choice";
import styled from "styled-components";
import data from "../../data";

const QuestionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f1f2f7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Background = styled.div`
  width: 100vw;
  height: 65vh;
  background: mediumaquamarine;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const QuestionModal = styled.div`
  border: 2px solid black;
  border-radius: 18px;
  margin: 0 2rem;
  background: white;
  z-index: 1;
  position: relative;
`;

const PageList = styled.ul`
  width: 100%;
  height: 50px;
  padding: 0;
  background: mediumaquamarine;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 18px;
  border: 2px solid black;
  position: absolute;
  top: -40px;
`;

const PageNum = styled.li.attrs((props) => ({
  className: props.className,
}))`
  color: white;

  &.current {
    color: mediumaquamarine;
    background: white;
    border-radius: 58%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const QuestionContent = styled.div`
  padding: 1.5em;
`;

const DogImage = styled.img`
  width: 130px;
  height: 130px;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  margin: 1rem 0;
  white-space: pre-line;
  line-height: 2.1rem;
`;

const Question = ({ location: { pathname }, handleResult }) => {
  const question = useGetQuestion();
  const userAnswerList = useUserAnswerList();
  const setUserAnswerList = useSetUserAnswerList();
  const questionNumber = JSON.parse(pathname.split("/")[2]);

  useEffect(() => {
    if (userAnswerList.length > data.length) {
      return setUserAnswerList([]);
    }
  }, [userAnswerList]);

  return (
    <>
      <QuestionContainer>
        <Background />
        <QuestionModal>
          <PageList>
            {data.map((item, i) => (
              <PageNum
                key={i.toString()}
                className={i + 1 === questionNumber ? "current" : null}
              >
                {i + 1}
              </PageNum>
            ))}
          </PageList>
          <QuestionContent>
            {data.map((item, i) =>
              i + 1 === questionNumber ? (
                <DogImage
                  key={i.toString()}
                  src={`/assets/${item[questionNumber]["imageFileName"]}`}
                />
              ) : null
            )}
            <Title>{question(questionNumber)}</Title>
            <Choice onClick={updateResult} />
          </QuestionContent>
        </QuestionModal>
      </QuestionContainer>
    </>
  );

  function updateResult(e) {
    handleResult();
    const userAnswer = e.target.innerText;
    setUserAnswerList([...userAnswerList, { questionNumber, userAnswer }]);
  }
};

export default withRouter(Question);
