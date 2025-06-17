import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#F3F4F6] h-[648px]">
      <Link to={"/"}>
        <img className="h-full mx-auto" src="images/banner.webp" alt="banner" />
      </Link>
    </div>
  );
};

export default Banner;
