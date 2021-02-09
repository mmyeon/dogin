import React, { useState } from "react";
import Button from "../Components/Button";

const Question1 = () => {
  const [userResult, setUserResult] = useState([]);

  function handleYesClick() {
    console.log("클릭되었습니다");
  }

  return (
    <>
      <div>Question1</div>
      {/* TODO: 클릭하면 userResult에 추가되기 */}
      <Button title="YES" onClick={handleYesClick} />
      <Button title="NO" onClick={handleYesClick} />
    </>
  );
};

export default Question1;
