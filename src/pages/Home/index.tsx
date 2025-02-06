import { useEffect, useState } from "react";

import { Content } from "./Content";
import DogWalkingAnimation from "./DogWalkingAnimation";

const Home = () => {
  const [showsAnimation, setShowsAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowsAnimation(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return <>{showsAnimation ? <DogWalkingAnimation /> : <Content />}</>;
};

export default Home;
