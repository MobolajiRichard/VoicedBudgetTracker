import React from "react";
import Header from "../Header/Header";
import Announcement from "../Header/Announcement";
import Slider from "../Header/Slider";
import Categories from "../Header/Categories";
import Products from "../Header/Products";
import Newsletter from "../Header/Newsletter";
import Footer from "../Header/Footer";

function HomePage() {
  return (
    <div>
      <Announcement />
      <Header />
      <Slider />
      <h3>Categories</h3>
      <Categories />
      <h3>Popular Products</h3>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
