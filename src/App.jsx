import { useState, useEffect } from "react";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Hero from "./components/Hero/Hero";
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
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/Product/ProductCard";
import Heading from "./components/Heading/Heading";
import Img1 from "./assets/product/p-1.jpg";
import Img2 from "./assets/product/p-2.jpg";
import Img3 from "./assets/product/p-3.jpg";
import Img4 from "./assets/product/p-4.jpg";
import Img5 from "./assets/product/p-5.jpg";
import Img6 from "./assets/product/p-9.jpg";
import Img7 from "./assets/product/p-7.jpg";
import Img8 from "./assets/product/p-1.jpg";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
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

  const ProductsData = [
    { id: 1, img: Img1, title: "Boat Headphone", price: "120", aosDelay: "0" },
    {
      id: 2,
      img: Img2,
      title: "Rocky Mountain",
      price: "420",
      aosDelay: "200",
    },
    { id: 3, img: Img3, title: "Goggles", price: "320", aosDelay: "400" },
    { id: 4, img: Img4, title: "Printed", price: "220", aosDelay: "600" },
    { id: 5, img: Img5, title: "Bag", price: "100", aosDelay: "0" },
    { id: 6, img: Img6, title: "Cap", price: "30", aosDelay: "200" },
    { id: 7, img: Img7, title: "Shoes", price: "250", aosDelay: "400" },
    { id: 8, img: Img8, title: "Jacket", price: "300", aosDelay: "600" },
  ];

  return (
    <div className="overflow-hidden duration-200 bg-white dark:bg-gray-900 dark:text-white">
      <Navbar
        products={ProductsData}
        setSearchResults={setSearchResults}
        setSearchQuery={setSearchQuery}
      />

      {/* Render Search Results if there's a query */}
      {searchQuery && searchResults.length > 0 && (
        <div className="container mt-8">
          <Heading
            title="Search Results"
            subtitle="Products matching your search"
          />
          <ProductCard data={searchResults} />
        </div>
      )}

      {searchQuery && searchResults.length === 0 && (
        <div className=" mt-0">
          <Heading title="" subtitle="" />
        </div>
      )}

      {!searchQuery && (
        <div>
          <Hero handleOrderPopup={handleOrderPopup} />
          <Category />
          <Category2 />
          <Services />
          <Banner data={BannerData} />
          <Product />
          <Banner data={BannerData2} />
          <Blogs />
          <Partners />
        </div>
      )}

      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;
