import { device } from "@/app/styles/breakpoints";
import styled from "styled-components";

const QuestionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#f1f2f7 41%, mediumaquamarine 41%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .indicator {
    width: 100%;
    height: 50px;
    padding: 0;
    background: mediumaquamarine;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 18px;
    border: 2px solid black;
    position: absolute;
    left: 0;
    top: -40px;

    > li {
      color: white;

      &.current {
        color: mediumaquamarine;
        background: white;
        border-radius: 58%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .content {
    > img {
      max-width: 100%;
      width: 8.2em;
      height: 8.2em;
      margin-top: 20px;
    }

    > h1 {
      font-size: 1.3rem;
      margin: 1rem 0;
      white-space: pre-line;
      line-height: 1.5em;

      @media ${device.tablet} {
        font-size: 1.6rem;
      }
    }
  }
`;

export default QuestionContainer;
