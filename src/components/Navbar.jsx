import { Link } from "react-router-dom";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import { navData } from "../dummyData/navData";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <Container>
      <Flex className={"justify-between items-center py-12.5"}>
        <Link to={"#"}>
          <img src="images/logo.png" alt="logo.png" />
        </Link>
        <ul className=" flex items-center gap-x-[57px]">
          {navData.map((item) => (
            <li key={item.id} className="title">
              <Link to={item.url}>{item.listName}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <button className="title mr-20">LOGIN</button>
          <button className="flex items-center gap-x-[10px] bg-[#000000] py-4 px-[38px] rounded-[52px] text-white font-['Montserrat'] font-medium text-base leading-[20.80px] ">
            Sign Up Now
            <span>
              <FaArrowRight className="text-[white]" />
            </span>
          </button>
        </div>
      </Flex>
    </Container>
  );
};

export default Navbar;
