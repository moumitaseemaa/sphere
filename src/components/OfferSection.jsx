import { Link } from "react-router-dom";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";

const OfferSection = () => {
  return (
    <Container>
      <div className="mt-21 mb-24">
        <Flex  className={"justify-center items-center gap-x-4"}>
          <Link to={"#"}>
            <img src="images/offerImg1.png" alt="offerImg1" />
          </Link>
          <Link to={"#"}>
            <img src="images/offerImg2.png" alt="offerImg2" />
          </Link>
        </Flex>
        <Flex className={"justify-center items-center gap-x-4 mt-4"}>
          <Link to={"#"}>
            <img src="images/offerImg3.png" alt="offerImg3" />
          </Link>
          <Link to={"#"}>
            <img src="images/offerImg4.png" alt="offerImg4" />
          </Link>
        </Flex>
      </div>
    </Container>
  );
};

export default OfferSection;
