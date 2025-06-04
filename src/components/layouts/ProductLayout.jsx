import { FaStar } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import Flex from "./Flex";
import HeartIcon from "../../icons/HeartIcon";
const ProductLayout = ({
  title,
  price,
  ratingAmount,
  discountOffer,
  discountRate,
  bestSellerPadTop,
  bestSellerPadBottom,
}) => {
  return (
    <div className="relative">
      <div
        className={`px-[55px] bg-white rounded-[15px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.08)]
        ${bestSellerPadTop ? "pt-[94px]" : "pt-[99px]"} 
        ${bestSellerPadBottom ? "pb-[78px]" : "pb-[38px]"}
        `}
      >
        {price && (
          <div className="absolute top-[8px] right-[12px]">
            <HeartIcon />
          </div>
        )}
        <img src="images/cardImage.png" alt="cardImage" />
      </div>
      {discountOffer && (
        <div className="absolute top-[57px] right-[30px] z-999 flex justify-center items-center">
          <img src="images/discountImg.png" alt="discountImg" />
          <span className="text-black absolute font-montserrat text-[19px] font-bold leading-[21.85px]">
            {discountRate}
          </span>
        </div>
      )}
      {discountOffer && (
        <div className="absolute top-[356px] right-[110px] flex justify-center items-center gap-x-[11px]">
          <h5 className="text-[#0177FC] font-montserrat text-[26px] font-bold leading-[31.2px]">
            $89.000
          </h5>
          <span className="text-[#9A9A9A] font-montserrat text-sm font-medium leading-[16.8px] line-through">
            IDR 150.00
          </span>
        </div>
      )}
      <div className="flex justify-between items-center font-['Montserrat'] font-extrabold text-[23px] text-[#2C2C2C] leading-[29.90px] mt-[38px]">
        <h4>{title}</h4>
        <span>{price}</span>
      </div>
      <p className="para max-w-[381px] mt-[21px] mb-[19px]">
        Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae
        leo nunc.
      </p>
      <Flex className={"items-center gap-x-[10px]"}>
        <div className="flex items-center gap-x-0.5 text-[#04A904] text-2xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <span className="para">({ratingAmount})</span>
      </Flex>
      <button className="border border-[#000000] bg-white py-4 px-[37px] rounded-[52px] flex justify-center items-center gap-x-[10px] mt-[23px] cursor-pointer">
        <IoMdCart className="text-[#000000] text-lg" />
        <span className="font-['Montserrat'] font-medium text-base text-[#000000] leading-[20.80px]">
          Add to Cart
        </span>
      </button>
    </div>
  );
};

export default ProductLayout;
