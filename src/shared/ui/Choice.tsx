import { BaseSyntheticEvent } from "react";
import Button from "./Button";

const Choice = ({ onClick }: { onClick: (e: BaseSyntheticEvent) => void }) => {
  return (
    <>
      <Button title="YES" marginRight={"5px"} onClick={onClick} />
      <Button title="NO" marginRight={"5px"} onClick={onClick} />
    </>
  );
};

export default Choice;
