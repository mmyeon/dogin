import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: mediumaquamarine;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-family: "Sunflower", sans-serif;
`;

const wag = keyframes`
50% {
  transform: rotate(10deg);
  }
`;

const blink = keyframes`
0%, 100% {
    transform: scale(1, 0.05);
  }
  5%, 95% {
    transform: scale(1, 1);
  }
`;

const tongue = keyframes`
0% {
  animation-timing-function : ease-in;
}
100% {
  height: 25px;
}
`;

const Walkingdog = styled.div`
  z-index: 100;

  > h1 {
    font-size: 30px;
  }
`;

const DogFace = styled.div`
  background: #fff8f1;
  height: 110px;
  width: 127px;
  position: relative;
  top: 95px;
  left: -13px;
  border-radius: 80px 80px 60px 60px;
  bottom: 573px;
  transform-style: preserve-3d;
`;

const DogBody = styled.div`
  background: #fff8f1;
  height: 100px;
  width: 170px;
  position: relative;
  top: 53px;
  left: 31px;
  border-radius: 0px 50px 50px 50px;
  transform: rotate(-12deg);
  z-index: -1;
`;

const dogLeg = styled.div`
  background: #fff8f1;
  width: 18px;
  height: 50px;
  position: relative;
  transform: rotate(0deg);
  border-radius: 0px 0px 50px 50px;
  z-index: -1;
  transform-origin: top;
`;

const Leg1 = styled(dogLeg)`
  top: 39px;
  left: 49px;
`;

const Leg2 = styled(dogLeg)`
  top: -2px;
  left: 86px;
`;

const Leg3 = styled(dogLeg)`
  top: -83px;
  left: 149px;
`;

const Leg4 = styled(dogLeg)`
  top: -133px;
  left: 178px;
`;

const Paw = styled.div`
  background: #fff8f1;
  width: 20px;
  height: 24px;
  position: relative;
  border-radius: 20px 20px 40px 40px;
  transform: rotate(70deg);
  right: 8px;
  top: 31px;
`;

const Paw1 = styled(Paw)``;
const Paw2 = styled(Paw)``;
const Paw3 = styled(Paw)``;
const Paw4 = styled(Paw)``;

const Tail = styled.div`
  height: 100px;
  width: 100px;
  background-color: transparent;
  box-shadow: 49px 10px 0px 0px #fff8f1;
  border-radius: 80%;
  position: relative;
  bottom: 345px;
  left: 86px;
  transform-origin: bottom;
  animation: ${wag} 1s infinite;
`;

const Ear = styled.div`
  background: #fff8f1;
  width: 41px;
  height: 80px;
  position: relative;
  border-radius: 800px 800px 180px 180px;
`;

const Ear1 = styled(Ear)`
  top: -25px;
  left: 1px;
`;

const Ear2 = styled(Ear)`
  bottom: 104px;
  left: 85px;
`;

const EarInside1 = styled(Ear1)`
  width: 25px;
  height: 28px;
  background: pink;
  opacity: 50%;
  top: -178px;
  left: 9px;
`;

const EarInside2 = styled(Ear2)`
  width: 25px;
  height: 28px;
  background: pink;
  opacity: 50%;
  top: -206px;
  left: 93px;
`;

const Nose = styled.div`
  position: relative;
  background-color: black;
  height: 12px;
  width: 18px;
  top: -165px;
  right: -54px;
  border-bottom-right-radius: 50% 100%;
  border-bottom-left-radius: 50% 100%;
`;

const Eye = styled.div`
  background-color: black;
  width: 10px;
  height: 13px;
  position: relative;
  border-radius: 50%;
  animation: ${blink} 3s infinite;
`;

const Eye1 = styled(Eye)`
  bottom: 204px;
  left: 26px;
`;
const Eye2 = styled(Eye)`
  bottom: 216px;
  left: 88px;
`;

const Mouth = styled.div`
  width: 23px;
  height: 12px;
  border: 2px solid black;
  border-top-left-radius: 100px;
  border-top-right-radius: 120px;
  border-bottom: 0px;
  position: relative;
  background: #fff8f1;
  z-index: -1;
`;

const Mouth1 = styled(Mouth)`
  transform: rotate(150deg);
  bottom: 197px;
  left: 44px;
`;

const Mouth2 = styled(Mouth)`
  bottom: 210px;
  transform: rotate(-150deg);
  left: 58px;
`;

const Tongue = styled.div`
  position: relative;
  bottom: 220px;
  left: 56px;
  width: 14px;
  height: 20px;
  background: red;
  border-radius: 5px 5px 10px 10px;
  animation: ${tongue} 0.3s none infinite;
  transform-origin: 50% 0%;
  z-index: -2;
`;

export {
  Container,
  Walkingdog,
  DogFace,
  Ear1,
  Ear2,
  EarInside1,
  EarInside2,
  Nose,
  Eye1,
  Eye2,
  Mouth1,
  Mouth2,
  Tongue,
  DogBody,
  Leg1,
  Leg2,
  Leg3,
  Leg4,
  Paw1,
  Paw2,
  Paw3,
  Paw4,
  Tail,
};
