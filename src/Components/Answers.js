import React from "react";
import Button from "../Components/Button";

const Answers = ({ onClick }) => {
  return (
    <div>
      <Button title="YES" marginRight={"5px"} onClick={onClick} />
      <Button title="NO" marginRight={"5px"} onClick={onClick} />
    </div>
  );
};

export default Answers;
