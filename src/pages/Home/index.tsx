import { useEffect, useState } from "react";

import { Content } from "./Content";
import DogWalkingAnimation from "../../shared/ui/DogWalkingAnimation";

const Home = () => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationVisible(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return <>{isAnimationVisible ? <DogWalkingAnimation /> : <Content />}</>;
};

export default Home;
