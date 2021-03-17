import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/Button";
import { getDogImageApi } from "../api";

const HomeContent = styled.div`
  /* TODO:padding margin의 필요성 */
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
  font-weight: 500;
  margin: 1.8rem 0;
  font-size: 1.8rem;
  line-height: 2.8rem;
`;

const StartBtn = styled(Button)``;

const Home = () => {
  const [imgURL, setImgURL] = useState([]);
  const [imgIndex, setImgIndex] = useState(null);

  async function getData() {
    try {
      const {
        data: { results: apiResult },
      } = await getDogImageApi();
      const imagesURL = apiResult.map((item) => item.urls.small);
      setImgURL(imagesURL);
    } catch (error) {
      console.log("failed");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setImgIndex(Math.floor(Math.random() * imgURL.length));
  }, [imgURL]);

  return (
    <>
      <Background />
      <HomeContent>
        {/* TODO: apiPage를 랜덤하게 보내서 다양한 강아지 사진 불러오기. 현재는 같은 10개만 넘어옴 */}
        <DogImage
          style={{
            backgroundImage: `url(
              ${imgURL[imgIndex]}
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
};

export default Home;
