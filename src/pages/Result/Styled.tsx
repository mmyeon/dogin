import { device, size } from "@/app/styles/breakpoints";
import styled from "styled-components";

const Gnb = styled.div`
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  background-color: #fffffffa;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 rgb(12 13 14 / 15%);

  > .link {
    font-size: 30px;
    color: #66cdaa;
    font-weight: bold;
    font-family: Poppins;
  }
`;

const Container = styled.div`
  width: 100vw;
  background: mediumaquamarine;
  position: relative;
  overflow: scroll;
  padding-top: 2em;
  padding-bottom: 1.4em;

  .content-container {
    max-width: 389px;
    margin: 0 auto;
    position: relative;

    .Card {
      padding: 1.3em;
      margin-top: 4rem;

      > .upper-section {
        width: 100%;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 2px dashed #000000b5;

        > .score-container {
          display: inline-flex;
          align-items: center;

          > img {
            width: 80px;
            height: 80px;
            margin: 8px 0;
          }

          > span {
            margin-left: -20px;
            background: #cb2527;
            color: white;
            padding: 0.6em 1.2em;
            border: 3px solid black;
            border-radius: 20px;
            font-size: 15px;
            z-index: -1;
            letter-spacing: 1px;
          }
        }
      }

      > .lower-section {
        width: 100%;
      }
    }

    .action-container {
      z-index: 10;
      position: fixed;
      top: 68%;

      @media (max-width: ${size.mobileM}) {
        left: 5px;
      }

      @media ${device.mobileM} {
        margin-left: -19px;
      }

      > .btn-container {
        background: #ffd767;
        display: flex;
        flex-direction: column;
        border-radius: 50px;

        .icon-wrapper {
          margin: 5px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          width: 36px;
          height: 36px;
          cursor: pointer;
        }

        button {
          &:focus {
            outline: none;
          }
        }

        img {
          width: 20px;
          height: 20px;
          padding: 2px;
        }

        .shareBtn {
          background: #cae97d;
        }

        .homeBtn {
          background: #a77deb;
        }
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  line-height: 30px;
  word-break: keep-all;
  padding: 0px 1em;
`;

const List = styled.ul`
  width: 100%;
`;

const ListItem = styled.li<{ borderBottom?: boolean; fontSize?: string }>`
  padding-top: 10px;
  padding-bottom: 5px;
  line-height: 1.3em;
  border-bottom: ${(props) => (props.borderBottom ? "1px solid black" : 0)};
  text-align: left;
  font-size: ${(props) => (props.fontSize === "big" ? "16px" : "0.9em")};
  padding-left: 10px;
  font-weight: 200;
  word-break: keep-all;

  > a {
    color: black;
  }
`;

export { Gnb, Container, Title, List, ListItem };
