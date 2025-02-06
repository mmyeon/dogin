import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -25px;
`;

const BackgroundCircle = styled.div<{ backgroundColor: string }>`
  display: flex;

  .circle {
    width: 45px;
    height: 45px;
    background: ${(props) => props.backgroundColor};
    border: 1px solid black;
    border-radius: 50%;
    position: relative;

    &.left {
      left: 6px;
    }

    &.right {
      right: 6px;
    }
  }
`;

const Title = styled.span`
  position: absolute;
  font-weight: bold;
  font-size: 21px;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const TitleWithBubble = ({ title }: { title: string }) => {
  return (
    <>
      <Container>
        <BackgroundCircle
          backgroundColor={title === "Great" ? "#219721" : "#FA5656"}
        >
          <div className="circle left" />
          <div className="circle right" />
        </BackgroundCircle>

        <Title>{title}</Title>
      </Container>
    </>
  );
};

export default TitleWithBubble;
