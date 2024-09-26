import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../Product/ProductCard";
import Heading from "../Heading/Heading";

import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";
import Img8 from "../../assets/product/p-1.jpg";

const Products = () => {
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

  const [searchResults, setSearchResults] = useState(ProductsData);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      {/* Navbar with setSearchResults and setSearchQuery */}
      <Navbar
        products={ProductsData}
        setSearchResults={setSearchResults}
        setSearchQuery={setSearchQuery} //
      />

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
        <div className="mt-0">
          <Heading title="" subtitle="" />
        </div>
      )}
    </div>
  );
};

export default Products;
