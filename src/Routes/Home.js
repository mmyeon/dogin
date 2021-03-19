import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import { getDogImageApi } from "../api";

const HomeContent = styled.div`
  padding-top: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 2rem;
  position: relative;
`;

const Background = styled.div`
  width: 100vw;
  height: 35vh;
  background: mediumaquamarine;
  position: absolute;
  left: 0;
  top: 0;
`;

const DogImage = styled.div`
  width: 180px;
  height: 180px;
  border: 10px solid white;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Title = styled.h1`
  margin: 1.8rem 0;
  font-size: 1.8rem;
  line-height: 2.8rem;
`;

const StartBtn = styled(Button)``;

const Home = () => {
  const [imgUrlList, setImgUrlList] = useState([]);
  const [imgIndex, setImgIndex] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setImgIndex(Math.floor(Math.random() * imgUrlList.length));
  }, [imgUrlList]);

  return (
    <>
      {/* TODO: 구조 개선 */}
      <Background />
      <HomeContent>
        <DogImage
          style={{
            backgroundImage: `url(
              ${imgUrlList[imgIndex]}
            )`,
          }}
        />
        <Title>
          나는 너와 <br></br>함께할 준비가 되어있을까?
        </Title>
        <Link to="/question/1">
          <StartBtn title="Dog In" />
        </Link>
      </HomeContent>
    </>
  );

  async function getData() {
    try {
      const {
        data: { results: apiResult },
      } = await getDogImageApi();
      const imagesURL = apiResult.map((item) => item.urls.small);
      setImgUrlList(imagesURL);
    } catch (error) {
      console.log("failed");
    }
  }
};

export default Home;
