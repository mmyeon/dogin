import { BaseSyntheticEvent } from "react";
import Button from "./Button";
export type OnClick = (e: BaseSyntheticEvent) => void;

const Choice = ({ onClick }: { onClick: OnClick }) => {
  return (
    <div>
      <Button title="YES" marginRight={"5px"} onClick={onClick} />
      <Button title="NO" marginRight={"5px"} onClick={onClick} />
    </div>
  );
};

export default Choice;
