import { device, size } from "@/app/styles/breakpoints";
import styled from "styled-components";

export const StyledContainer = styled.div`
  font-family: "Sunflower", sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${size.mobileS}) {
    background: linear-gradient(mediumaquamarine 35%, white 34%);
  }

  @media ${device.mobileS} {
    background: linear-gradient(mediumaquamarine 38%, white 37%);
  }

  > .content {
    padding-top: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 2rem;
    position: relative;

    > .dog-img {
      width: 180px;
      height: 180px;
      border: 10px solid white;
      border-radius: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    > .title {
      margin: 1.8rem 0;
      font-size: 1.8rem;
      line-height: 2.8rem;
      word-break: keep-all;
    }
  }
`;
