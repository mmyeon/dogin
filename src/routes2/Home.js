import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import { getDogImageApi } from "../api";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, mediumaquamarine 38%, white 5%);
  display: flex;
  align-items: center;
  justify-content: center;

  > .content {
    padding-top: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 2rem;
    position: relative;

    > .dog-img {
      width: 180px;
      height: 180px;
      border: 10px solid white;
      border-radius: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    > .title {
      margin: 1.8rem 0;
      font-size: 1.8rem;
      line-height: 2.8rem;
    }
  }
`;

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
    <Container>
      <section className="content">
        <div
          className="dog-img"
          style={{
            backgroundImage: `url(
              ${imgUrlList[imgIndex]}
            )`,
          }}
        />

        <h1 className="title">
          나는 너와 <br></br>함께할 준비가 되어있을까?
        </h1>

        <Link to="/quiz/1">
          <Button title="Dog In" />
        </Link>
      </section>
    </Container>
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
