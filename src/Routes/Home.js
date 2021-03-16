import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/Button";
import { getDogImageApi } from "../api";
import { getDefaultNormalizer } from "@testing-library/dom";

const HomeContent = styled.div`
  /* TODO:padding margin의 필요성 */
  /* padding: 1.5em; */
  margin: 0 2rem;
  position: relative;
`;

const Background = styled.div`
  width: 100vw;
  height: 40vh;
  background: mediumaquamarine;
  position: absolute;
  left: 0;
  top: 0;
`;

const DogImage = styled.img`
  width: 200px;
  height: 200px;
  background: white;
  border: none;
  text-decoration: none;
  /* border: 2px solid white; */
  /* border-radius: 50px; */
`;

const Title = styled.h1`
  font-weight: 500;
  margin: 2rem 0;
  font-size: 1.6rem;
  line-height: 2rem;
`;

const Home = () => {
  let apiResult = null;
  async function getData() {
    try {
      const {
        data: { results: apiResult },
      } = await getDogImageApi();
      // console.log("results", results);
      console.log("apiResult", apiResult);
    } catch (error) {
      console.log("failed");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Background />
      <HomeContent>
        <DogImage />
        <Title>
          나는 너와 <br></br>함께할 준비가 되어있을까
        </Title>
        <Link to="/question/1">
          <Button title="Dog In" />
        </Link>
      </HomeContent>
    </>
  );
};

export default Home;
