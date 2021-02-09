import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Home = () => {
  return (
    <>
      <div>Dog In</div>
      <h1>나는 너와 함께 살 준비가 되어있을까?</h1>
      <Link to="/question1">
        <Button title="start" />
      </Link>
    </>
  );
};

export default Home;
