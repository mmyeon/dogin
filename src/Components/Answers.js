import React from "react";
import Button from "../Components/Button";

const Answers = ({ onClick }) => {
  return (
    <div>
      <Button title="YES" onClick={onClick} />
      <Button title="NO" onClick={onClick} />
    </div>
  );
};

export default Answers;
