import React from "react";
import Button from "../Components/Button";

const Answers = () => {
  function handleYesClick() {
    console.log("클릭되었습니다");
  }

  return (
    <div>
      <Button title="YES" onClick={handleYesClick} />
      <Button title="NO" onClick={handleYesClick} />
    </div>
  );
};

export default Answers;
