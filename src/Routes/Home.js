import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/Button";
import { getDogImageApi } from "../api";

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
  width: 300px;
  height: 300px;
  border: 7px solid white;
  border-radius: 50%;
`;

const Title = styled.h1`
  font-weight: 500;
  margin: 2rem 0;
  font-size: 1.6rem;
  line-height: 2rem;
`;

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
        {/* TODO: 이미지태그가 아닌 backgroundImage로 변경해서 이미지사이즈 다른 부분 개선하기 */}
        {/* TODO: apiPage를 랜덤하게 보내서 다양한 강아지 사진 불러오기. 현재는 같은 10개만 넘어옴 */}
        <DogImage src={imgURL[imgIndex]} />
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
