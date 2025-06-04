import Container from "./layouts/Container";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Flex from "./layouts/Flex";
import ProductLayout from "./layouts/ProductLayout";
const NewArrival = () => {
  return (
    <div className="mt-[105px] mb-[84px]">
      <Container>
        <div className="flex justify-between items-center mb-[46px] ">
          <h2 className="text-left font-['Prompt'] font-bold text-[47px] text-[#000000] leading-[58.75px] tracking-[-0.02em">
            New <span className="text-[#5E1EE5]"> arrival</span> for you
          </h2>
          <Flex className={"items-center gap-x-6 cursor-pointer"}>
            <div className="size-[55px] border border-[#000000] rounded-full flex justify-center items-center hover:bg-[#AFE638] hover:border-none transition-all duration-300">
              <FaArrowLeft className="text-[#000000] text-lg" />
            </div>
            <div className="size-[55px] border border-[#000000] rounded-full flex justify-center items-center hover:bg-[#AFE638] hover:border-none transition-all duration-300">
              <FaArrowRight className="text-[#000000] text-lg" />
            </div>
          </Flex>
        </div>
        <div className="flex justify-between">
          <div className="mt-11">
            <ul className="flex flex-col gap-y-[30px] border-l-2 border-l-[#E2E2E2] cursor-pointer">
              <li className="flex items-center gap-x-[18px] pl-6 ml-[-1px] border-l-2 border-l-[#E2E2E2]  hover:border-l-2 hover:border-[#5E1EE5] transition-all duration-300">
                <p className="subPara">Computer & Laptop</p>
                <span className="btn bg-[#1F2537] text-[#EDEDEF] py-[6px] px-3 ">
                  15
                </span>
              </li>
              <li className="flex items-center gap-x-[18px] pl-6 ml-[-1px] border-l-2 border-l-[#E2E2E2]  hover:border-l-2 hover:border-[#5E1EE5] transition-all duration-300">
                <p className="subPara">Mobile & Phone</p>
                <span className="btn bg-[#AFE638] text-[#1F2537] py-[6px] px-3 ">
                  35
                </span>
              </li>
              <li className="flex items-center gap-x-[18px] pl-6 ml-[-1px] border-l-2 border-l-[#E2E2E2]  hover:border-l-2 hover:border-[#5E1EE5] transition-all duration-300">
                <p className="subPara">Camera Imaging</p>
                <span className="btn bg-[#5E1EE5] text-[#FFFFFF] py-[6px] px-3 ">
                  10
                </span>
              </li>
              <li className="flex items-center gap-x-[18px] pl-6 ml-[-1px] border-l-2 border-l-[#E2E2E2]  hover:border-l-2 hover:border-[#5E1EE5] transition-all duration-300">
                <p className="subPara">TV & Smart Box</p>
                <span className="btn bg-[#F1F1F2] text-[#1F2537] py-[6px] px-[16px] ">
                  8
                </span>
              </li>
              <li className="flex items-center gap-x-[18px] pl-6 ml-[-1px] border-l-2 border-l-[#E2E2E2]  hover:border-l-2 hover:border-[#5E1EE5] transition-all duration-300">
                <p className="subPara">Home Appliance</p>
                <span className="btn bg-[#FFE921] text-[#000000]  py-[6px] px-[16px]">
                  2
                </span>
              </li>
            </ul>
          </div>
          <div className="max-w-[920px] flex items-center gap-x-[98px]">
            <div className="max-w-[410px]">
              <ProductLayout
                title={"Xiphone 14 Pro Maxe"}
                price={"$175.00"}
                bestSellerPadTop={false}
                bestSellerPadBottom={false}
                ratingAmount={"121"}
                discountOffer={false}
                discountRate={false}
              />
            </div>
            <div className="max-w-[410px]">
              <ProductLayout
                title={"Xiphone 13"}
                price={"$100.00"}
                bestSellerPadTop={false}
                bestSellerPadBottom={false}
                ratingAmount={"89"}
                discountOffer={false}
                discountRate={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
