import React, { useState } from "react";
import Answers from "../Components/Answers";
import Detail from "../Components/Detail";

const Question1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  function handleDetail() {
    setIsVisible(true);
  }

  return (
    <>
      <div>Question1</div>
      <Answers onClick={handleDetail} />
      {isVisible && <Detail />}
    </>
  );
};

export default Question1;
