import {
  Container,
  WalkingDog,
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
} from "./Styled";

const DogWalkingAnimation = () => {
  return (
    <Container>
      <WalkingDog>
        <h1>로딩중..</h1>
        <DogFace>
          <Ear1></Ear1>
          <Ear2></Ear2>
          <EarInside1></EarInside1>
          <EarInside2></EarInside2>
          <Nose></Nose>
          <Eye1></Eye1>
          <Eye2></Eye2>
          <Mouth1></Mouth1>
          <Mouth2></Mouth2>
          <Tongue></Tongue>
        </DogFace>
        <DogBody></DogBody>
        <Leg1>
          <Paw1></Paw1>
        </Leg1>
        <Leg2>
          <Paw2></Paw2>
        </Leg2>
        <Leg3>
          <Paw3></Paw3>
        </Leg3>
        <Leg4>
          <Paw4></Paw4>
        </Leg4>
        <Tail></Tail>
      </WalkingDog>
    </Container>
  );
};

export default DogWalkingAnimation;
