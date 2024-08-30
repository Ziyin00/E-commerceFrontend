import React from "react";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import headphone from "./assets/hero/headphone.png";
import Product from "./components/Product/Product";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from "./components/Blog/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const BannerData = {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, ad.",
    bgColor: "#f42c37",
  };
  const BannerData2 = {
    discount: "30% OFF",
    title: "Happy Hours",
    date: "14 Jan to 28 Jan",
    image: smartwatch2,
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, ad.",
    bgColor: "#2dcc6f",
  };
  return (
    <div className="overflow-hidden duration-200 bg-white dark:bg-gray-900 dark:text-white">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Product />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;
