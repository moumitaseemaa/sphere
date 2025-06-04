import SearchIcon from "../icons/SearchIcon";
import Container from "./layouts/Container";

const Gateway = () => {
  return (
    <Container>
      <div className="bg-[#212736] rounded-[20px] pt-[62px] pb-[71px] pl-[73px] pr-[51px] mt-[105px] flex justify-between">
        <div>
          <h2 className="font-['Prompt'] font-bold text-[46px] text-[#ffffff] leading-[55.20px] tracking-[-0.02em] max-w-[473px] mb-[17px]">
            Gateway to a world of innovation with
          </h2>
          <img src="images/shapeStar.png" alt="shapeStar" />
        </div>
        <div className="max-w-[591px] bg-[#EFF0F1] rounded-[20px] px-[23px] pt-8 pb-[11px] mt-[25px]">
          <div className="flex items-center gap-x-[21px] ml-3">
            <SearchIcon />
            <input
              className="font-['Montserrat'] font-light text-[21px] text-[#01081A] pr-[15px] outline-none w-full"
              type="text"
              placeholder="Search for electronic"
            />
          </div>
          <button className="px-[243px] py-[13px] rounded-[14px]  bg-[#ACE238] font-['Montserrat'] font-medium text-[17px] text-[#000000] mt-[23px]">
            Search
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Gateway;
