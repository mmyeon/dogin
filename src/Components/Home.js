import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { useQuestionNum } from "../context";

const HomeContainer = styled.div`
  text-align: center;
  padding: 3em;
`;

const ProjectName = styled.span`
  font-size: 1.5rem;
`;

const Title = styled.h1`
  margin: 1.5rem 0;
  font-size: 2rem;
  line-height: 2rem;
`;

const Home = () => {
  const questionNum = useQuestionNum();

  return (
    <HomeContainer>
      <ProjectName>Dog In</ProjectName>
      <Title>나는 너와 함께 살아갈 준비가 되어있을까?</Title>
      <Link to={`/question${questionNum}`}>
        <Button title="START" />
      </Link>
    </HomeContainer>
  );
};

export default Home;
