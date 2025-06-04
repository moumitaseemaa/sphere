import Banner from "../components/Banner";
import Categories from "../components/Categories";
import FlashSale from "../components/FlashSale";
import Footer from "../components/Footer";
import Gateway from "../components/Gateway";
import Navbar from "../components/Navbar";
import NewArrival from "../components/NewArrival";
import OfferSection from "../components/OfferSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Categories/>
      <NewArrival/>
      <OfferSection/>
      <FlashSale/>
      <Gateway/>
      <Footer/>
    </>
  );
};

export default HomePage;
