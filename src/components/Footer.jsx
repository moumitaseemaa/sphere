import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import { Link } from "react-router-dom";
import PhoneIcon from "../icons/PhoneIcon";
import EmailIcon from "../icons/EmailIcon";

const Footer = () => {
  return (
    <Container>
      <Flex className={"py-[73px]"}>
        <div className="mr-[147px] pt-[5px]">
          <Link to={"#"}>
            <img src="images/logo.png" alt="logo.png" />
          </Link>
          <p className="para mt-14 max-w-[381px] cursor-pointer">
            Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
            vitae leo nunc.
          </p>
        </div>
        <div className="mr-[70px]">
          <h4 className="subHeading mb-3">Company</h4>
          <ul className="para flex flex-col gap-3">
            <li>
              <Link to={"#"}>About Us</Link>
            </li>
            <li>
              <Link to={"#"}>Products Digital</Link>
            </li>
            <li>
              <Link to={"#"}>Customer Reviews</Link>
            </li>
          </ul>
        </div>
        <div className="mr-[70px]">
          <h4 className="subHeading mb-3">Information</h4>
          <ul className="para flex flex-col gap-3">
            <li>
              <Link to={"#"}>Return & Refund</Link>
            </li>
            <li>
              <Link to={"#"}>Payment Methods</Link>
            </li>
            <li>
              <Link to={"#"}>Help Center</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="subHeading mb-3">Contact</h4>
          <ul className="para flex flex-col gap-3">
            <li className="relative pl-7 cursor-pointer">
              <Link
                to={"tel:01934567890"}
                className="absolute left-2 top-1/2 -translate-1/2"
              >
                <PhoneIcon />
              </Link>
              <span>(+1) 123-456-7890</span>
            </li>
            <li className="relative pl-7 cursor-pointer">
              <Link
                to={"mailto:email@youremail.com"}
                className="absolute left-2 top-1/2 -translate-1/2"
              >
                <EmailIcon />
              </Link>
              <span>email@youremail.com</span>
            </li>
          </ul>
        </div>
      </Flex>
    </Container>
  );
};

export default Footer;
