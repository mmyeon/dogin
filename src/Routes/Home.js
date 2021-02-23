import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/Button";

const HomeContainer = styled.div`
  padding: 1.5em;
  margin: 0 2rem;
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
  return (
    <HomeContainer>
      <ProjectName>Dog In</ProjectName>
      <Title>나는 너와 함께 살아갈 준비가 되어있을까?</Title>
      <Link to="/question/1">
        <Button title="START" />
      </Link>
    </HomeContainer>
  );
};

export default Home;
