import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { useGetDetail } from "../context";
import Button from "./Button";

const ModalOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: mediumaquamarine;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 25px;
  margin: 0 2rem;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 1rem 0;
`;

const Detail = ({ location: { pathname } }) => {
  const detail = useGetDetail();
  const questionNumber = JSON.parse(pathname.split("/")[2]);

  function updateQuestion() {
    console.log("clicked");
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <Title>이 문제를 맞히셨습니다</Title>
        <p>{detail(questionNumber)}</p>
        <Link to={`/question/${questionNumber + 1}`}>
          <Button title="NEXT" onClick={updateQuestion} />
        </Link>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default withRouter(Detail);
