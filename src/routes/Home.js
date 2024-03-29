import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import { getDogImageApi } from "../api";
import Loader from "../components/Loader";
import { device, size } from "../breakpoints";
import { useDispatch } from "react-redux";
import { resetUserChoiceList, updateCurrentQuizNumber } from "../redux/store";

const Container = styled.div`
  font-family: "Sunflower", sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${size.mobileS}) {
    background: linear-gradient(mediumaquamarine 35%, white 34%);
  }

  @media ${device.mobileS} {
    background: linear-gradient(mediumaquamarine 38%, white 37%);
  }

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
      word-break: keep-all;
    }
  }
`;

const Home = () => {
  const [imgUrlList, setImgUrlList] = useState([]);
  const [imgIndex, setImgIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    dispatch(updateCurrentQuizNumber(0));
    dispatch(resetUserChoiceList());

    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  useEffect(() => {
    setImgIndex(Math.floor(Math.random() * imgUrlList.length));
  }, [imgUrlList]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
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
