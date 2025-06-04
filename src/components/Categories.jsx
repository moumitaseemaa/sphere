import CategoriesProductItem from "./layouts/CategoriesProductItem";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";

const Categories = () => {
  return (
    <Container>
      <div className="relative pt-[105px]">
        <img
          className="absolute top-[69px] left-[-176px]"
          src="images/snakeStarImg1.png"
          alt="snakeStarImg1"
        />
        <h1 className="text-center font-['Prompt'] font-extrabold text-[74px] text-[#000000] leading-[92.50px]  mb-[51px]  tracking-[-0.02em">
          What <span className="text-[#5E1EE5]">we</span> provide?
        </h1>
         <img
          className="absolute top-[86px] right-[35px]"
          src="images/snakeStarImg2.png"
          alt="snakeStarImg2"
        />
      </div>
      <Flex className={"justify-between"}>
        <CategoriesProductItem src={"images/Computer&Laptop.png"} alt={"Computer & Laptop"} title={"Computer & Laptop"}/>
        <CategoriesProductItem src={"images/Mobile&Phone.png"} alt={"Mobile & Phone"} title={"Mobile & Phone"}/>
        <CategoriesProductItem src={"images/Camera.png"} alt={"Camera"} title={"Camera"}/>
        <CategoriesProductItem src={"images/TV&SmartBox.png"} alt={"TV & Smart Box"} title={"TV & Smart Box"}/>
        <CategoriesProductItem src={"images/HomeAppliance.png"} alt={"Home Appliance"} title={"Home Appliance"}/>
        <CategoriesProductItem src={"images/Accessories.png"} alt={"Accessories"} title={"Accessories"}/>
        <CategoriesProductItem src={"images/OtherCategories.png"} alt={"Other Categories"} title={"Other Categories"}/>
        
      </Flex>
    </Container>
  );
};

export default Categories;
