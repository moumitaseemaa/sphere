import Container from "./layouts/Container";
import ProductLayout from "./layouts/ProductLayout";

const FlashSale = () => {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <h2 className="text-left font-['Prompt'] font-bold text-[47px] text-[#000000] leading-[58.75px] tracking-[-0.02em">
          Flash sale for <span className="text-[#5E1EE5]">best</span> sellers
        </h2>
        <img
          className="relative top-[-6px] right-[82px]"
          src="images/flashShape.png"
          alt="flashShape"
        />
      </div>
      <div className="flex items-center gap-x-5 mt-[65px]">
        <div className="max-w-[400px]">
          <ProductLayout
            title={"Xpad Mini 6"}
            price={false}
            bestSellerPadTop={true}
            bestSellerPadBottom={true}
            discountOffer={true}
            discountRate={"8% off"}
            ratingAmount={"125"}
          />
        </div>
        <div className="max-w-[400px]">
          <ProductLayout
            title={"Hypermac Air Purpler M1"}
            price={false}
            bestSellerPadTop={true}
            bestSellerPadBottom={true}
            discountOffer={true}
            discountRate={"8% off"}
            ratingAmount={"125"}
          />
        </div>
        <div className="max-w-[400px]">
          <ProductLayout
            title={"AR10 AC 1PK with S-Inverter"}
            price={false}
            bestSellerPadTop={true}
            bestSellerPadBottom={true}
            discountOffer={true}
            discountRate={"13% off"}
            ratingAmount={"125"}
          />
        </div>
      </div>
    </Container>
  );
};

export default FlashSale;
