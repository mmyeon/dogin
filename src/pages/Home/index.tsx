import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

import Loader from "../../components/Loader";
import { useDispatch } from "react-redux";
import { resetUserChoiceList, updateCurrentQuizNumber } from "../../app/store";

import { StyledContainer } from "@/features/loader/Loader";
import { useDogImages } from "@/entities/dogs/useDogImages";

const Home = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { data: imgUrlList = [], isLoading } = useDogImages();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCurrentQuizNumber(0));
    dispatch(resetUserChoiceList());

    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  useEffect(() => {
    if (!imgUrlList) return;

    setImgIndex(Math.floor(Math.random() * imgUrlList.length));
  }, [imgUrlList]);

  if (isLoading || !imgUrlList) return <Loader />;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <StyledContainer>
          <section className="content">
            <div
              className="dog-img"
              style={{
                backgroundImage: `url(${imgUrlList[imgIndex]})`,
              }}
            />

            <h1 className="title">
              나는 너와 <br></br>함께할 준비가 되어있을까?
            </h1>

            <Link to="/quiz/1">
              <Button title="Dog In" />
            </Link>
          </section>
        </StyledContainer>
      )}
    </>
  );
};

export default Home;
