import Container from "./layouts/Container";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#F3F4F6] h-[597px]">
      <Container>
        <Link to={"/"}>
          <img className="pl-[100px]" src="images/banner.png" alt="banner" />
        </Link>
      </Container>
    </div>
  );
};

export default Banner;
