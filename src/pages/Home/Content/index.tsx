import { Link } from "react-router-dom";
import { StyledContainer } from "./StyledContainer";
import Button from "@/shared/ui/Button";
import { useDogImages } from "@/entities/dogs/useDogImages";

export function Content() {
  const { data: imgUrlList = [] } = useDogImages();
  const imgRandomIndex = Math.floor(Math.random() * imgUrlList.length);

  return (
    <StyledContainer>
      <section className="content">
        <div
          className="dog-img"
          style={{
            backgroundImage: `url(${imgUrlList[imgRandomIndex]})`,
          }}
        />

        <h1 className="title">
          나는 너와 <br></br>함께할 준비가 되어있을까?
        </h1>

        <Link to="/quiz/1">
          <Button title="Dog In" />
        </Link>
      </section>
    </StyledContainer>
  );
}
