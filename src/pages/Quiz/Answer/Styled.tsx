import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  background: mediumaquamarine;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > .Card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3em 0;

    .answer-title {
      font-weight: 800;
      margin-top: 0.5rem;
      white-space: pre-line;
      word-break: keep-all;
      line-height: 30px;
      font-size: 1.25em;
    }

    .explanation {
      white-space: pre-line;
      margin: 1.4em 0;
      font-weight: 500;
      font-size: 1.05em;
      line-height: 1.3;
    }

    .reference {
      font-weight: 200;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 1rem;
      color: #595656d4;

      > a {
        color: #595656d4;
      }
    }
  }
`;

export default Container;
